var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var Users = require('../models').Users;
var config = require(__dirname + '/../config/config.json');

//redis配置
var redis = require('redis'),
    RDS_PORT = 6379,
    RDS_HOST = '127.0.0.1',
    RDS_OPTS = {},
    client = redis.createClient(RDS_PORT, RDS_HOST, RDS_OPTS);
/**
 * 登录验证
 * 1，判断验证码和密码是否为空，如果两者都为空，则返回错误；若密码不为空，则执行2；若密码为空验证码不为空则执行4。
 * 2，判断用户名密码是否正确，若正确，则执行3；若错误，则返回错误信息。
 * 3，更新用户token，更新token成功之后返回登陆成功。
 * 4，在redis中查询该验证码是否有效，若有效，则执行5；若失败，则返回错误信息。
 * 5，如果验证码有效则查询该用户是否已注册，若已注册，则执行3；若没注册，执行6
 * 6，注册（新增）用户
 */
router.post('/', function(req, res) {
    var body = req.body;
    var mobile = req.body.mobile || '';
    var password = req.body.password || '';
    var code = req.body.code || '';

    console.log(mobile + '....' + password);
    if (mobile == '' || (password == '' && code == '')) {
        res.status(401).send();
    } else {
        var token = jwt.sign({ mobile: mobile }, config.secret, { expiresIn: 60 * 60 });
        if (password == '') {
            client.get(`checkcode${req.body.mobile}`, function(err, reply) {
                if (err) {
                    res.status(500).send(err);
                }
                var checkcode = reply.toString();
                if (code == checkcode) {
                    Users.findOne({
                        where: {
                            mobile: mobile,
                        },
                        attributes: { exclude: ['password', 'status'] }
                    }).then(user => {
                        if (!user) {
                            //用户不存在，执行注册
                            // user.createtime = Date.now();
                            // user.updatetime = Date.now();
                            body.avatar = 'https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100';
                            body.username = `mt-${mobile}`;
                            body.token = token;
                            Users.create(body).then((user) => {
                                res.status(201).send({
                                    success: true,
                                    message: '验证成功!',
                                    token: user.token,
                                    user: user
                                });
                            });
                        } else {
                            user.token = token;
                            user.save().then(function() {
                                res.status(201).send({
                                    success: true,
                                    message: '验证成功!',
                                    token: token,
                                    user: user
                                });
                            });
                        }
                    })
                } else {
                    res.status(400).send('验证码错误');
                }
            });
        } else {
            //密码不为空，则用密码验证登录
            Users.findOne({
                where: {
                    mobile: req.body.mobile,
                }
            }).then(user => {
                if (!user) {
                    res.send({
                        success: false,
                        message: '该用户不存在'
                    });
                } else {
                    var result = Users.build().verifyPassword(password, user.password);
                    if (!result) {
                        res.send({
                            success: false,
                            message: '认证失败,密码错误!'
                        });
                    } else {
                        user.token = token;
                        user.save().then(function() {
                            res.status(201).send({
                                success: true,
                                message: '验证成功!',
                                token: token,
                                user: user
                            });
                        });
                    }
                }
            })
        }
    }

});

//检查账号是否已经被注册
router.get('/', function(req, res) {
    var query = req.query;
    Users.findOne({
        where: query
    }).then(function(user) {
        if (user) {
            res.status(200).send(user);
        } else {
            res.status(400).send(user);
        }
    }, function(err) {
        res.status(500).send(err);
    });
});

//检查账号是否已经被注册
router.post('/logout', function(req, res) {
    var body = req.body;
    var stoken = req.get('Authorization').split(" ");
    Users.update({ token: '' }, {
        where: {
            token: stoken[1]
        }
    }).then(function(result) {
        if (result[0]) {
            res.status(200).send('注销成功');
        } else {
            res.status(400).send('注销失败');
        }
    }, function(err) {
        res.status(500).send(err);
    });
});

module.exports = router;