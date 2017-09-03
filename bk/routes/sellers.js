var express = require('express');
var router = express.Router();
var Sellers = require('../models').Sellers;
var Supports = require('../models').Supports;
var Users = require('../models').Users;
var FoodCategories = require('../models').FoodCategories;
var UserCollections = require('../models').UserCollections;

/**/
router.get('/', function (req, res, next) {
    Sellers.findAll().then(function (data) {
        res.json(data);
    });
});

router.get('/:id', function (req, res, next) {
    //如果用户已登录，则查询该用户是否收藏了该店
    var stoken;
    if (req.get('Authorization')) {
        stoken = req.get('Authorization').split(" ");

        Promise.all(
            [
                Sellers.findOne({
                    where: {
                        id: req.params.id
                    },
                    include: [{
                        model: Supports,
                        as: 'supports'
                    }]
                }),
                Users.findOne({
                    where: {
                        token: stoken[1]
                    }
                })
            ]).then(result => {
            const [seller, user] = result;
            if (!user) {
                seller.dataValues.collectionId = 0;
                res.json(seller);
            } else {
                UserCollections.findOne({
                    where: {
                        merchantType: 'seller',
                        merchantId: req.params.id,
                        userId: user.id
                    }
                }).then(userC => {
                    if (!userC) {
                        seller.dataValues.collectionId = 0;
                    } else {
                        seller.dataValues.collectionId = userC.id;
                    }
                    res.json(seller);
                });
            }
        });
    } else {
        Sellers.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: Supports,
                as: 'supports'
            }]
        }).then((seller)=>{
            seller.dataValues.collectionId = 0;
            res.json(seller);
        })
    }

});

module.exports = router;