var express = require('express');
var router = express.Router();
var FoodCategories = require('../models').FoodCategories;
var Foods = require('../models').Foods;

/*获取全部*/
router.get('/', function(req, res) {
    //console.log(req);
    FoodCategories.findAll({
        where: {
            sellerId: req.query.sellerId,
        },
        include: [{ model: Foods, required: true, as: 'foods' }]
    }).then(function(data) {
        res.json(data);
    });
});

//根据id获取
router.get('/:id', function(req, res) {
    FoodCategories.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(function(data) {
            res.json(data);
        });
});

module.exports = router;