'use strict';
module.exports = function(sequelize, DataTypes) {
    var Supports = sequelize.define('Supports', {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        type: DataTypes.INTEGER,
        sellerId: { type: DataTypes.INTEGER, field: 'seller_id' },
        description: DataTypes.STRING,
    }, {
        timestamps: false,
        tableName: 'supports',
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                Supports.belongsTo(models.Seller, { foreignKey: 'sellerId' });
            }
        }
    });

    return Supports;
};