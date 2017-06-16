var express = require('express');
var router = express.Router();
var Checkcodes = require('../models').Checkcodes;
var Users = require('../models').Users;

//redis配置
var redis = require('redis'),
    RDS_PORT = 6379,
    RDS_HOST = '127.0.0.1',
    RDS_OPTS = {},
    client = redis.createClient(RDS_PORT, RDS_HOST, RDS_OPTS);

client.on_ready(function() {
    console.log('ready');
});

router.post('/', function(req, res) {
    var body = req.body;
    var ip = req.ip;
    var now = Date.now();
    var end = now;
    var begin = now - 24 * 60 * 60 * 1000;

    var checkTimeFn = Checkcodes.findOne({
        where: {
            mobile: body.mobile,
            expireAt: {
                $gt: now
            }
        }
    }).then(function(checkCode) {
        console.log('checkCode:' + checkCode);
        if (checkCode) {
            var now = Date.now(),
                diffSeconds = parseInt((now - checkCode.createtime) / 1000, 10);
            if (diffSeconds < 90) {
                //时间间隔太小，老弟你刷短信纳是吧，果断拒绝你
                return Promise.reject({ status: 429, msg: '操作过于频繁，请于90秒后重试' });
            } else {
                // checkCode.setIsUsed(true);
                return Promise.resolve();
            }
        } else {
            return Promise.resolve();
        }
    });

    var checkMobileCount = Checkcodes.count({
        where: {
            mobile: body.mobile,
            createtime: {
                $gt: begin,
                $lt: end
            }
        }
    }).then(function(count1) {
        console.log('count1:' + count1);
        if (count1 > 3) {
            //老大，都给你手机号发3次了还收不到，你是要用短信轰炸别人呢还是真收不到，果断舍弃你这用户把
            return Promise.reject({ status: 429, msg: '该手机号码发送短信超过每日限制次数' });
        } else {
            return Promise.resolve();
        }
    });

    var checkIpCount = Checkcodes.count({
        where: {
            ip: ip,
            createtime: {
                $gt: begin,
                $lt: end
            }
        }
    }).then(function(count) {
        console.log('count2:' + count);
        if (count > 6) {
            return Promise.reject({ status: 429, msg: '该IP地址发送短信超过每日限制次数' });
        } else {
            return Promise.resolve();
        }
    });

    Promise.all([checkTimeFn, checkIpCount, checkMobileCount])
        .then(() => {
            newCheckCodeByMobile(body.mobile, {
                ip: ip
            }, function(code) {
                console.log('will start redis');
                //300(秒)为验证码过期时间
                client.set(`checkcode${body.mobile}`, code, 'EX', 300, function() {
                    console.log('redis client save success');
                    res.status(201).send('发送成功');
                });

            });
        }, function(err) {
            // console.log(err);
            res.status(err.status).send(err.msg);
        })
        .catch((err) => {
            console.log('allerr:' + err);
        });
});

/**
 * 验证短信验证码
 * @param mobile
 * @param checkcode
 */
router.get('/', function(req, res) {
    var body = req.query;
    console.log(body);
    client.get(`checkcode${body.mobile}`, function(err, reply) {
        if (err) {
            res.status(500).send(err);
        }
        var code = reply.toString();
        if (body.code == code) {
            res.status(200).send('验证成功');
        } else {
            res.status(400).send('验证失败');
        }
    });
});


//生成手机验证码
function newCheckCodeByMobile(mobile, options, callback) {
    if (arguments.length === 2) {
        callback = options;
        options = {};
    }
    var ip = options.ip;
    var now = Date.now(),
        code = mathRand(),
        expireAt = now + 60 * 1000 * 5; //5分钟后失效
    Checkcodes.create({
        mobile: mobile,
        ip: ip,
        code: code,
        used: 0,
        expireAt: expireAt,
        createtime: now
    }).then(callback(code));
}

//生成六位随机数
function mathRand() {
    var num = "";
    for (var i = 0; i < 6; i++) {
        num += Math.floor(Math.random() * 10);
    }
    return num;
}

module.exports = router;