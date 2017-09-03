'use strict';
module.exports = function(sequelize, DataTypes) {
    var Sellers = sequelize.define('Sellers', {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        deliveryTime: { type: DataTypes.INTEGER, field: 'delivery_time' },
        score: DataTypes.FLOAT,
        serviceScore: { type: DataTypes.FLOAT, field: 'service_score' },
        foodScore: { type: DataTypes.FLOAT, field: 'food_score' },
        rankRate: { type: DataTypes.FLOAT, field: 'rank_rate' },
        minPrice: { type: DataTypes.DOUBLE, field: 'min_price' },
        deliveryPrice: { type: DataTypes.DOUBLE, field: 'delivery_price' },
        bulletin: DataTypes.TEXT,
        avatar: DataTypes.STRING(200),
        address: DataTypes.STRING(200),
        mobile: DataTypes.STRING(20),
        distInfo: { type: DataTypes.STRING(45), field: 'dist_info' },
        disStartTime: { type: DataTypes.STRING(20), field: 'dist_start_time' },
        disEndTime: { type: DataTypes.STRING(20), field: 'dist_end_time' },
    }, {
        timestamps: false,
        tableName: 'seller',
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                models.Sellers.hasMany(models.FoodCategories, { as: 'Goods', foreignKey: 'sellerId' });
                models.Sellers.hasMany(models.Supports, { as: 'supports', foreignKey: 'sellerId' });
            }
        }
    });


    return Sellers;
};