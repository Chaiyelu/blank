'use strict';
module.exports = function(sequelize, DataTypes) {
    var FoodCategories_Foods = sequelize.define('FoodCategories_Foods', {
        foodId: { type: DataTypes.INTEGER, field: 'food_id' },
        cateId: { type: DataTypes.INTEGER, field: 'cate_id' }
    }, {
        timestamps: false,
        tableName: 'food_category_food',
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return FoodCategories_Foods;
};