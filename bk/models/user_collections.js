'use strict';
module.exports = function(sequelize, DataTypes) {
    var UserCollections = sequelize.define('UserCollections', {
        id: { type: DataTypes.INTEGER, field: 'id', primaryKey: true },
        merchantId: { type: DataTypes.INTEGER, field: 'merchant_id' },
        userId: { type: DataTypes.INTEGER, field: 'user_id' },
        merchantType: { type: DataTypes.STRING, field: 'merchant_type' },
        createTime: { type: DataTypes.DATE, field: 'create_time' }
    }, {
        timestamps: false,
        tableName: 'user_collection',
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                // UserCollections.belongsTo(models.Users, { foreignKey: 'userId' });
            }
        }
    });

    return UserCollections;
};