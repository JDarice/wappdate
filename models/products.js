'use strict';
const {
  sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products',{
    createdByUserId: DataTypes.INTEGER,
    productName: DataTypes.STRING,
    photoFilePath: DataTypes.STRING,
    status: DataTypes.STRING,
    productStageMsgInitial: DataTypes.STRING,
    productStageMsgFinal: DataTypes.STRING
  },{
    sequelize,
    modelName: 'Products'});
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    Products.associate = function(models) {
      // define association here
      Users.hasMany(Products,{
        foreignKey: 'createdByUserId'
      });
      Products.belongsTo(Users)
    }
  return Products;
};