var express = require('express');
var router = express.Router();
var UserCollections = require('../models').UserCollections;
var Users = require('../models').Users;
var db = require('../models/index');

/**/
router.get('/', function (req, res, next) {
    var stoken = req.get('Authorization').split(" ");
    console.log(stoken[1]);
    Users.findOne({
        where: {
            token: stoken[1]
        }
    }).then(function (user) {
        db.sequelize.query(`select uc.id as id, merchant_id, merchant_type, coalesce(s.name, h.name) as merchant_name, coalesce(s.avatar, h.avatar) as merchant_avatar, min_price, delivery_price
        from meituan.user_collections uc
        left join meituan.sellers s
            on uc.merchant_id = s.id and uc.merchant_type = 'seller'
        left join meituan.hotel h
            on uc.merchant_id = h.id and uc.merchant_type = 'hotel'
        WHERE uc.user_id=?`, {
            replacements: [user.id],
            type: db.sequelize.QueryTypes.SELECT
        }).then(function (collections) {
            res.json(collections);
        })
    });


});

router.post('/', function (req, res) {
    var stoken = req.get('Authorization').split(" ");
    console.log(req.body);
    Users.findOne({
        where: {
            token: stoken[1]
        }
    }).then(function (user) {
        var form = {};
        form.userId = user.id;
        form.merchantType = req.body.merchantType;
        form.merchantId = req.body.merchantId;

        UserCollections.findOne({where:form}).then(userC1=>{
            if (userC1) {
                res.status(201).send({
                    message: '收藏成功',
                    data: {
                        id: userC1.id
                    }
                });
            } else {
                UserCollections.create(form).then((userC) =>{
                    res.status(201).send({
                        message: '收藏成功',
                        data: {
                            id: userC.id
                        }
                    });
                });
            }
        })

        
    });
});

router.delete('/', function (req, res) {
    console.log(1111);
    var id = req.query.id;
    console.log(req.query.id);
    var ids = id.split(',');
    console.log(ids);
    UserCollections.destroy({
        where: {
            id: {
                $in: ids
            }
        }
    }).then(function (data) {
        res.status(201).send({
            message: '取消收藏成功'
        });
    })
});

module.exports = router;