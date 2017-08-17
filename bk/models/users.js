'use strict';
var bcrypt = require('bcrypt-nodejs');

function cryptPassword(password, callback) {
    bcrypt.genSalt(10, function(err, salt) { // Encrypt password using bycrpt module
        if (err)
            return callback(err);

        bcrypt.hash(password, salt, null, function(err, hash) {
            return callback(err, hash);
        });
    });
}

module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define('Users', {
        //id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        mobile: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        birthday: DataTypes.STRING,
        token: DataTypes.STRING,
        avatar: DataTypes.STRING
    }, {
        timestamps: false,
        tableName: 'users',
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                models.Users.hasMany(models.FoodRatings, { foreignKey: 'userId' });
                // models.Users.hasMany(models.SellerCollections, { as: 'SellerCollections', foreignKey: 'userId' });
                // FoodRatings.belongsTo(models.User);
                // FoodRatings.belongsTo(models.Foods);
            }
        },
        instanceMethods: {
            verifyPassword: function(password, hash) {
                return bcrypt.compareSync(password, hash);
            }
        },
        hooks: {
            beforeCreate: function(Users, options, cb) {
                cryptPassword(Users.password, function(err, hash) {
                    if (err) return cb(err);
                    Users.password = hash;
                    return cb(null, options);
                });
            }
        }
    });
    return Users;
};