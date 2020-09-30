'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MessageChannelSettings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(MessageChannelSettings, {
        foreignKey: 'createdByUserId'
      });
      MessageChannelSettings.belongsTo(Users)

      // MessageChannelSettings.hasOne(Users, {
      //   foreignKey: 'Id'
      // });
      // Users.belongsTo(MessageChannelSettings);

    }
  };
  MessageChannelSettings.init({
    createdByUserId: DataTypes.INTEGER,
    channelType: DataTypes.STRING,
    sentFromName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MessageChannelSettings',
  });
  return MessageChannelSettings;
};