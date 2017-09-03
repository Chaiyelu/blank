'use strict';
module.exports = function(sequelize, DataTypes) {
    var FoodCategories = sequelize.define('FoodCategories', {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        sellerId: { type: DataTypes.INTEGER, field: 'seller_id' },
        name: DataTypes.STRING,
        supportId: { type: DataTypes.STRING, field: 'support_id' }
    }, {
        timestamps: false,
        tableName: 'food_category',
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                //FoodCategories.belongsTo(models.Seller);
                models.Foods.belongsToMany(FoodCategories, { through: models.FoodCategories_Foods, as: 'foodCategories', foreignKey: 'foodId' });
            }
        }
    });

    return FoodCategories;
};