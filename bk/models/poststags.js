'use strict';
module.exports = function(sequelize, DataTypes) {
  var postsTags = sequelize.define('postsTags', {
    postId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return postsTags;
};