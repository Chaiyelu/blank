'use strict';
module.exports = function(sequelize, DataTypes) {
    var SellerCollections = sequelize.define('SellerCollections', {
        sellerId: { type: DataTypes.INTEGER, field: 'seller_id' },
        userId: { type: DataTypes.INTEGER, field: 'user_id' },
        shopType: { type: DataTypes.INTEGER, field: 'shop_type' },
        createTime: { type: DataTypes.DATE, field: 'create_time' }
    }, {
        timestamps: false,
        tableName: 'seller_collections',
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                SellerCollections.belongsTo(models.Users, { foreignKey: 'userId' });
                SellerCollections.belongsTo(models.Sellers, { foreignKey: 'sellerId' });
            }
        }
    });

    return SellerCollections;
};