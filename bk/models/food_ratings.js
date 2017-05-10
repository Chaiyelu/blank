'use strict';
module.exports = function(sequelize, DataTypes) {
    var FoodRatings = sequelize.define('FoodRatings', {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        sellerId: { type: DataTypes.INTEGER, field: 'seller_id' },
        userId: { type: DataTypes.INTEGER, field: 'user_id' },
        rateTime: { type: DataTypes.STRING, field: 'rate_time' },
        deliveryTime: { type: DataTypes.STRING, field: 'delivery_time' },
        score: DataTypes.INTEGER,
        rateType: { type: DataTypes.INTEGER, field: 'rate_type' },
        text: DataTypes.STRING
    }, {
        timestamps: false,
        tableName: 'food_ratings',
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                // FoodRatings.belongsTo(models.Seller);
                FoodRatings.belongsTo(models.Users, { foreignKey: 'userId' });
                // FoodRatings.belongsTo(models.Foods);
            }
        }
    });

    return FoodRatings;
};