'use strict';
const {
  sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const SentMessages = sequelize.define('SentMessages',{
    createdByUserId: DataTypes.INTEGER,
    contact_id: DataTypes.INTEGER,
    product_has_messageTemplate_id: DataTypes.INTEGER,
    queue_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
    sentDate: DataTypes.DATE,
    failedDate: DataTypes.DATE,
    sent: DataTypes.BOOLEAN,
    failed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'SentMessages'});
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    SentMessages.associate = function(models) {
      // define association here
      SentMessages.belongsTo(models.Users);
      SentMessages.belongsTo(models.Contacts);
      SentMessages.belongsTo(models.Products_has_MessagesTemplates);
      SentMessages.belongsTo(models.Queues);
      models.Users.hasMany(SentMessages,{
        foreignKey: 'createdByUserId'
      });
      models.Contacts.hasMany(SentMessages,{
        foreignKey: 'contact_id'
      });
      models.Products_has_MessagesTemplates.hasMany(SentMessages,{
        foreignKey: 'product_has_messageTemplate_id'
      });
      models.Queues.hasMany(SentMessages,{
        foreignKey: 'queue_id'
      });
    }
  return SentMessages;
};