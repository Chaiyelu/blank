var express = require('express');
var router = express.Router();
var FoodRatings = require('../models').FoodRatings;
var Users = require('../models').Users;

/**/
router.get('/', function(req, res, next) {
    console.log(req.query);
    FoodRatings.findAll({
        where: req.query,
        include: [{ model: Users, required: true, exclude: ['token'] }]
    }).then(function(data) {
        res.json(data);
    });
});

module.exports = router;