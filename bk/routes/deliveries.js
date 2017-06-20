var express = require('express');
var router = express.Router();
var Delivery = require('../models').Delivery;
var Users = require('../models').Users;
var db = require('../models/index');

/**/
router.get('/', function(req, res, next) {
    var stoken = req.get('Authorization').split(" ");
    console.log(stoken[1]);
    Users.findOne({
        where: {
            token: stoken[1]
        }
    }).then(function(user) {
        console.log(JSON.stringify(user));
        Delivery.findAll({
            where: {
                userId: user.id
            },
            order: [
                ['selected', 'DESC']
            ]
        }).then(function(data) {
            res.json(data);
        });
    });

});

// router.get('/:uid', function(req, res, next) {
//     Seller.findOne({
//             where: {
//                 userId: req.params.uid
//             }
//         })
//         .then(function(seller) {
//             res.json(seller);
//         });
// });

router.post('/', function(req, res) {
    var form = req.body;
    form.createtime = Date.now();
    form.updatetime = Date.now();
    var stoken = req.get('Authorization').split(" ");
    console.log(stoken[1]);
    Users.findOne({
        where: {
            token: stoken[1]
        }
    }).then(function(user) {
        console.log(JSON.stringify(user));
        form.userId = user.id;
        if (1 == form.selected) {
            db.sequelize.transaction(function(t) {
                // 注意，这时使用的是callback而不是promise.then()
                return Delivery.update({ 'selected': 0 }, {
                    where: {
                        userId: user.id
                    },
                    transaction: t
                }).then(function() {
                    return Delivery.upsert(form, { transaction: t });
                })
            }).then(function() {
                // Committed
                res.status(201).send({ message: '新增成功' });
            }).catch(function(err) {
                // Rolled back
                res.status(400).send({ message: '新增失败' });
            });
        } else {
            Delivery.upsert(form).then(function(data) {
                res.status(201).send({ message: '新增成功' });
            }).catch(function(err) {
                res.status(400).send({ message: '新增失败' });
            });
        }
    });
});

router.put('/', function(req, res) {
    var form = req.body;
    form.updatetime = Date.now();
    var stoken = req.get('Authorization').split(" ");
    Users.findOne({
        where: {
            token: stoken[1]
        }
    }).then(function(user) {
        console.log(JSON.stringify(user));
        form.userId = user.id;
        if (1 == form.selected) {
            db.sequelize.transaction(function(t) {
                // 注意，这时使用的是callback而不是promise.then()
                return Delivery.update({ 'selected': 0 }, {
                    where: {
                        userId: user.id
                    },
                    transaction: t
                }).then(function() {
                    return Delivery.upsert(form, { transaction: t });
                })
            }).then(function() {
                // Committed
                res.status(201).send({ message: '修改成功' });
            }).catch(function(err) {
                // Rolled back
                res.status(400).send({ message: '修改失败' });
                console.error(err);
            });
        } else {
            Delivery.upsert(form).then(function(data) {
                res.status(201).send({ message: '修改成功' });
            });
        }

    });
});

router.delete('/:id', function(req, res) {
    var stoken = req.get('Authorization').split(" ");
    console.log(stoken[1]);
    Users.findOne({
        where: {
            token: stoken[1]
        }
    }).then(function(user) {
        var form = {};
        form.id = req.params.id;
        form.userId = user.id;
        Delivery.destroy({
            where: form
        }).then(function(data) {
            res.status(201).send({ message: '删除成功' });
        });
    });
});

module.exports = router;