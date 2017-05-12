var express = require('express');
var utils = require('utils');
var router = express.Router();
var FoodRatings = require('../models').FoodRatings;
var Users = require('../models').Users;

/**/
router.get('/', function(req, res, next) {
    //console.log(req.query);
    //TODO: 对象中除去offset和page键值对
    var page, offset = '';
    if (req.query.page) {
        page = parseInt(req.query.page);
    }
    if (req.query.offset) {
        offset = parseInt(req.query.offset);
    }
    delete req.query.page;
    delete req.query.offset;
    console.log(req.query);
    FoodRatings.findAndCountAll({
        where: req.query,
        offset: (page - 1) * offset, //开始的数据索引，比如当page=2 时offset=10 ，而pagesize我们定义为10，则现在为索引为10，也就是从第11条开始返回数据条目
        limit: offset,
        include: [{ model: Users, required: true, exclude: ['token'] }]
    }).then(function(data) {
        // if (data.length != 0) {
        //     console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        //     console.log(data);
        //     res.send(res, { rows: data.rows, total: data.count });
        // } else {
        //     utils.send(res, {
        //         err: '没有找到文章，请先创建'
        //     })
        // }
        res.json(data);
    });
});

module.exports = router;