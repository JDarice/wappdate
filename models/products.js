'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Products.hasMany(Users);
    }
  };
  Products.init({
    createdByUserId: DataTypes.INTEGER,
    productName: DataTypes.STRING,
    photoFilePath: DataTypes.STRING,
    status: DataTypes.STRING,
    productStageMsgInitial: DataTypes.STRING,
    productStageMsgFinal: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};