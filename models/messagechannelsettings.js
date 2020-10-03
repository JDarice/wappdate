'use strict';
const {
  sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const MessageChannelSettings = sequelize.define('MessageChannelSettings',{
    createdByUserId: DataTypes.INTEGER,
    channelType: DataTypes.STRING,
    sentFromName: DataTypes.STRING
  },{
    sequelize,
    modelName: 'MessageChannelSettings',
  });
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    MessageChannelSettings.associate = function(models) {
      // define association here
      MessageChannelSettings.belongsTo(models.Users)
      models.Users.hasMany(MessageChannelSettings, {
        foreignKey: 'createdByUserId'
      });
    }
  return MessageChannelSettings;
};