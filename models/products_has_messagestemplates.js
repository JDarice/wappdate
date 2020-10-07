'use strict';
const {
  sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Products_has_MessagesTemplates = sequelize.define('Products_has_MessagesTemplates',{
    product_id: DataTypes.INTEGER,
    messageTemplate_id: DataTypes.STRING
  },{
    sequelize,
    modelName: 'Products_has_MessagesTemplates'});
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    Products_has_MessagesTemplates.associate = function(models) {
      // define association here
      Products_has_MessagesTemplates.belongsTo(models.Products);
      Products_has_MessagesTemplates.belongsTo(models.MessageTemplates);
      models.Products.hasMany(Products_has_MessagesTemplates,{
        foreignKey: 'product_id'
      });
      models.MessageTemplates.hasMany(Products_has_MessagesTemplates,{
        foreignKey: 'messageTemplate_id'
      })
    }
  return Products_has_MessagesTemplates;
};