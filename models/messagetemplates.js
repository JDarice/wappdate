'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MessageTemplates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MessageTemplates.hasMany(Users);
      MessageTemplates.hasMany(MessageChannelSettings);
    }
  };
  MessageTemplates.init({
    createdByUserId: DataTypes.INTEGER,
    messageChannelSettings_id: DataTypes.INTEGER,
    messageName: DataTypes.STRING,
    messageChannel: DataTypes.STRING,
    messageContent: DataTypes.STRING,
    hasSpecialCharacter: DataTypes.BOOLEAN,
    countOfUsedCharacters: DataTypes.INTEGER,
    countOfAvailableCharacters: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MessageTemplates',
  });
  return MessageTemplates;
};