'use strict';
module.exports = function(sequelize, DataTypes) {
    var Checkcodes = sequelize.define('Checkcodes', {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        mobile: DataTypes.STRING(20),
        code: DataTypes.STRING(10),
        ip: DataTypes.STRING(25),
        status: DataTypes.INTEGER,
        expireAt: DataTypes.STRING(20),
        used: DataTypes.INTEGER,
        usingAt: DataTypes.DATE,
        createtime: DataTypes.STRING(20)
    }, {
        timestamps: false,
        tableName: 'checkcode',
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        },
        setterMethods: {
            setIsUsed: function(value) {
                var val = value ? 1 : 0;
                this.setDataValue('used', val);
            }
        }
    });

    return Checkcodes;
};