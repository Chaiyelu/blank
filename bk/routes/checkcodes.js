var express = require('express');
var router = express.Router();
var Checkcodes = require('../models').Checkcodes;

router.post('/', function(req, res) {
    var body = req.body;
    console.log(body.mobile);
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
        console.log('checkCode');
        console.log(checkCode);
        if (checkCode) {
            var now = Date.now(),
                diffSeconds = parseInt((now - checkCode.createtime) / 1000, 10);
            if (diffSeconds < 90) {
                //时间间隔太小，老弟你刷短信纳是吧，果断拒绝你
                return Promise.reject('操作过于频繁，请于90秒后重试');
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
        console.log('count1');
        console.log(count1);
        if (count1 > 3) {
            //老大，都给你手机号发3次了还收不到，你是要用短信轰炸别人呢还是真收不到，果断舍弃你这用户把
            return Promise.reject('该手机号码发送短信超过每日限制次数');
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
        console.log('count2');
        console.log(count);
        if (count > 6) {
            return Promise.reject('该IP地址发送短信超过每日限制次数');
        } else {
            return Promise.resolve();
        }
    });

    Promise.all([checkTimeFn, checkIpCount, checkMobileCount]).then(() => {
        newCheckCodeByMobile(body.mobile, {
            ip: ip
        }, function() {
            res.status(201).send('发送成功');
        });
    }, function(err) {
        console.log(err);
        res.status(429).send(err);
    }).catch((err) => {
        console.log('allerr');
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
        expireAt = now + 60 * 1000 * 5; //5分钟后失效
    Checkcodes.create({
        mobile: mobile,
        ip: ip,
        code: '123456',
        used: 0,
        expireAt: expireAt,
        createtime: now
    }).then(callback);
}

module.exports = router;