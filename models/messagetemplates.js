'use strict';
const {
  sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const MessageTemplates = sequelize.define('MessageTemplates',{
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    createdByUserId: DataTypes.INTEGER,
    messageChannelSettings_id: DataTypes.INTEGER,
    messageName: DataTypes.STRING,
    messageChannel: DataTypes.STRING,
    messageContent: DataTypes.STRING,
    hasSpecialCharacter: DataTypes.BOOLEAN,
    countOfUsedCharacters: DataTypes.INTEGER,
    countOfAvailableCharacters: DataTypes.INTEGER,
    forProductStage: DataTypes.STRING

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
      MessageTemplates.belongsTo(models.Users,{
        foreignKey: 'Id'
      });
      MessageTemplates.belongsTo(models.MessageChannelSettings,{
        foreignKey: 'Id'
      });
      models.Users.hasMany(MessageTemplates,{
        foreignKey: 'createdByUserId'
      });
      models.MessageChannelSettings.hasMany(MessageTemplates,{
        foreignKey: 'messageChannelSettings_id'
      })
    }  
  return MessageTemplates;
};