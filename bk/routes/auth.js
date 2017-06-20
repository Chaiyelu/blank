var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var Users = require('../models').Users;
var config = require(__dirname + '/../config/config.json');

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
    var mobile = req.body.mobile || '';
    var password = req.body.password || '';

    console.log(mobile + '....' + password);
    if (mobile == '' || password == '') {
        res.status(401).send();
    }

    Users.find({
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
                const payload = { mobile: user.mobile };
                var token = jwt.sign(payload, config.secret, { expiresIn: 60 * 60 });
                var userInfo = {};
                userInfo.id = user.id;
                userInfo.username = user.username;
                userInfo.avatar = user.avatar;
                // return res.status(201).send(token);
                user.token = token;
                user.save().then(function() {});
                return res.status(201).json({
                    success: true,
                    message: '验证成功!',
                    token: token,
                    user: userInfo
                });
            }
        }
    })
});

//检查账号是否已经被注册
router.get('/', function(req, res) {
    var query = req.query;
    Users.findOne({
        where: query
    }).then(function(user) {
        console.log('-------res---------');
        if (user) {
            res.status(200).send(user);
        } else {
            res.status(400).send(user);
        }
    }, function(err) {
        console.log('-------err---------');
        res.status(400).send(err);
    });
});

module.exports = router;