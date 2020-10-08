'use strict';
const {
  sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Contacts = sequelize.define('Contacts', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    createdByUserId: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    status: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    legalType: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    cpf: DataTypes.STRING,
    photoFilePath: DataTypes.STRING
  },{
    sequelize,
    modelName: 'Contacts'});
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    Contacts.associate = function(models) {
      // define association here
      Contacts.belongsTo(models.Users,{
        foreignKey: 'Id'
      })
      models.Users.hasMany(Contacts,{
        foreignKey: 'createdByUserId'
      });
    }
  return Contacts;
};