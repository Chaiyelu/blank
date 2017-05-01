'use strict';
module.exports = function(sequelize, DataTypes) {
    var Foods = sequelize.define('Foods', {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        sellerId: { type: DataTypes.INTEGER, field: 'seller_id' },
        name: DataTypes.STRING,
        price: { type: DataTypes.DOUBLE, field: 'price' },
        oldPrice: { type: DataTypes.DOUBLE, field: 'old_price' },
        description: DataTypes.STRING,
        sellCount: { type: DataTypes.INTEGER, field: 'sell_count' },
        info: DataTypes.STRING(200),
        image: DataTypes.STRING(200)
    }, {
        timestamps: false,
        tableName: 'foods',
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                models.FoodCategories.belongsToMany(Foods, { through: models.FoodCategories_Foods, as: 'foods', foreignKey: 'cateId' });
            }
        }
    });
    return Foods;
};