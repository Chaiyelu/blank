'use strict';
module.exports = function(sequelize, DataTypes) {
  var post = sequelize.define('post', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    authorName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        models.post.belongsToMany(models.tag, {through: "postsTags"})
        // associations can be defined here
      }
    }
  });
  return post;
};