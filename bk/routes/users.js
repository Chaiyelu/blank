var express = require('express');
var router = express.Router();
var Users = require('../models').Users;
var jwt = require('jsonwebtoken');
var config = require(__dirname + '/../config/config.json');

//redis配置
var redis = require('redis'),
    RDS_PORT = 6379,
    RDS_HOST = '127.0.0.1',
    RDS_OPTS = {},
    client = redis.createClient(RDS_PORT, RDS_HOST, RDS_OPTS);

client.on_ready(function() {
    console.log('ready');
});

//注册
router.post('/', function(req, res) {
    var body = req.body;
    body.createdAt = Date.now();
    body.updatedAt = Date.now();
    body.avatar = 'https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100';
    body.username = `mt-${body.mobile}`;
    body.token = jwt.sign({
        mobile: body.mobile
    }, config.secret, {
        expiresIn: 60 * 60
    });
    //先判断短信验证码是否有效
    client.get(`checkcode${body.mobile}`, function(err, reply) {
        if (err) {
            res.status(500).send(err);
        }
        var code = reply.toString();
        if (body.code == code) {
            //如果验证码有效，新增用户
            delete body.code;
            Users.create(body).then(function(user) {
                var userInfo = {};
                userInfo.id = user.id;
                userInfo.username = user.username;
                userInfo.avatar = user.avatar;
                res.status(201).json({
                    success: true,
                    message: '验证成功!',
                    token: user.token,
                    user: userInfo
                });
            });

        } else {
            res.status(400).send('验证失败');
        }
    })

});

//获取用户信息
router.get('/:id', function(req, res) {
    var stoken = req.get('Authorization').split(" ");
    Users.findOne({
        where: {
            token: stoken[1]
        }
    }).then(function(user) {
        console.log(user.birthday);
        var data = {};
        data.id = user.id;
        data.mobile = user.mobile;
        data.username = user.username;
        data.birthday = user.birthday;
        data.avatar = user.avatar;
        res.json(data);
    });
});

//查询用户
router.get('/', function(req, res) {
    var query = req.query;
    Users.findAll({
        where: query
    }).then(function(users) {
        if (users.length > 0) {
            res.status(200).send(users);
        } else {
            res.status(400);
        }
    });
});

//修改用户信息
router.put('/', function(req, res) {
    var stoken = req.get('Authorization').split(" ");
    var form = req.body;
    Users.update(form, {
        where: {
            token: stoken[1]
        }
    }).then(function(data) {
        res.status(201).send({
            message: '修改成功'
        });
    });

});
module.exports = router;