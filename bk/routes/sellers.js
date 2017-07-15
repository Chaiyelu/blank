var express = require('express');
var router = express.Router();
var Sellers = require('../models').Sellers;
var Supports = require('../models').Supports;
var FoodCategories = require('../models').FoodCategories;

/**/
router.get('/', function(req, res, next) {
    Sellers.findAll().then(function(data) {
        res.json(data);
    });
});

router.get('/:id', function(req, res, next) {
    //如果用户已登录，则查询该用户是否收藏了该店
    Sellers.findOne({
            where: {
                id: req.params.id
            },
            include: [{ model: Supports, as: 'supports' }]
        })
        .then(function(sellers) {
            res.json(sellers);
        });
});

module.exports = router;