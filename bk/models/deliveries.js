'use strict';
module.exports = function(sequelize, DataTypes) {
    var Delivery = sequelize.define('Delivery', {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        consignee: DataTypes.STRING,
        tel: DataTypes.STRING,
        address: DataTypes.STRING,
        area: DataTypes.STRING,
        zipcode: DataTypes.INTEGER,
        selected: DataTypes.INTEGER,
        userId: { type: DataTypes.INTEGER, field: 'user_id' },
        createtime: DataTypes.DATE,
        updatetime: DataTypes.DATE,
    }, {
        timestamps: false,
        tableName: 'deliverie',
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                Delivery.belongsTo(models.Users, { foreignKey: 'userId' });
            }
        }
    });

    return Delivery;
};