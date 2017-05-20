var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var UsersModel = require('../models').Users;
var config = require(__dirname + '/../config/config.json');

//登录验证
router.post('/', function(req, res) {
    var mobile = req.body.mobile || '';
    var password = req.body.password || '';

    console.log(mobile + '....' + password);
    if (mobile == '' || password == '') {
        return res.send(401);
    }

    UsersModel.find({
        where: {
            mobile: req.body.mobile,
        }
    }).then(user => {
        console.log(user);
        if (!user) {
            res.send({
                success: false,
                message: '该用户不存在'
            });
        } else {
            var result = UsersModel.build().verifyPassword(password, user.password);
            if (!result) {
                res.send({
                    success: false,
                    message: '认证失败,密码错误!'
                });
            } else {
                const payload = { mobile: user.mobile };
                var token = jwt.sign(payload, config.secret, { expiresIn: 60 * 1 });
                // return res.status(201).send(token);
                user.token = token;
                user.save().then(function() {});
                return res.status(201).json({
                    success: true,
                    message: '验证成功!',
                    token: token,
                    name: user.name
                });
            }
        }
    })
});
module.exports = router;