var express = require('express');
var router = express.Router();
var Users = require('../models').Users;

router.post('/', function(req, res) {
    var form = req.body;
    form.createdAt = Date.now();
    form.updatedAt = Date.now();
    Users.create(form).then(function(data) {
        res.status(201).json(data);
    });
});

//登录
router.get('/', function(req, res) {
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

//修改用户信息
router.put('/', function(req, res) {
    var stoken = req.get('Authorization').split(" ");
    var form = req.body;
    Users.update(form, {
        where: {
            token: stoken[1]
        }
    }).then(function(data) {
        res.status(201).send({ message: '修改成功' });
    });

});
module.exports = router;