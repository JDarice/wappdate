'use strict';
const {
  sequelize
} = require('sequelize');
const messagechannelsettings = require('./messagechannelsettings');
module.exports = (sequelize, DataTypes) => {
  const MessageTemplates = sequelize.define('MessageTemplates',{
    createdByUserId: DataTypes.INTEGER,
    messageChannelSettings_id: DataTypes.INTEGER,
    messageName: DataTypes.STRING,
    messageChannel: DataTypes.STRING,
    messageContent: DataTypes.STRING,
    hasSpecialCharacter: DataTypes.BOOLEAN,
    countOfUsedCharacters: DataTypes.INTEGER,
    countOfAvailableCharacters: DataTypes.INTEGER

  },{
    sequelize,
    modelName: 'MessageTemplates'});
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    MessageTemplates.associate = function(models) {
      // define association here
      Users.hasMany(MessageTemplates,{
        foreignKey: 'createdByUserId'
      });
      MessageChannelSettings.hasMany(MessageTemplates,{
        foreignKey: 'messageChannelSettings_id'
      })
      MessageTemplates.belongsTo(Users);
      MessageTemplates.belongsTo(MessageChannelSettings);
    }
  
  return MessageTemplates;
};