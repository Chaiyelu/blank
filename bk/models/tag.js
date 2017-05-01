'use strict';
module.exports = function(sequelize, DataTypes) {
    var tag = sequelize.define('tag', {
        name: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                models.tag.belongsToMany(models.post, { through: "postsTags" })
                    // associations can be defined here
            }
        }
    });
    return tag;
};