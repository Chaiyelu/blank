'use strict';
module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define('Users', {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        mobile: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        token: DataTypes.STRING,
        avatar: DataTypes.STRING
    }, {
        timestamps: false,
        tableName: 'users',
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                Users.hasMany(models.FoodRatings, { foreignKey: 'userId' });
                // FoodRatings.belongsTo(models.User);
                // FoodRatings.belongsTo(models.Foods);
            }
        }
    });
    return Users;
};