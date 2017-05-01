'use strict';
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {});
    return User;
};