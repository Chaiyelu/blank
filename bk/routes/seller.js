var express = require('express');
var router = express.Router();
var Seller = require('../models').Seller;
var Supports = require('../models').Supports;
var FoodCategories = require('../models').FoodCategories;

/**/
router.get('/', function(req, res, next) {
    Seller.findAll().then(function(data) {
        res.json(data);
    });
});

router.get('/:id', function(req, res, next) {
    Seller.findOne({
            where: {
                id: req.params.id
            },
            include: [{ model: Supports, as: 'supports' }]
        })
        .then(function(seller) {
            res.json(seller);
        });
});

module.exports = router;