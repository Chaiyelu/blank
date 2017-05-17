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
router.get('/login', function(req, res) {
    Users.findAll({
        where: {
            email: req.email,
            password: req.password
        }
    }).then(function(data) {
        res.json(data)
    });
});
module.exports = router;