var express = require('express');
var router = express.Router();
var Project = require('../models').Project;

/* GET users listing. */
router.get('/', function(req, res, next) {
    Project.findAll({

    }).then(function(data) {
        Project.getUser();
        res.json(data);
    });
});

module.exports = router;