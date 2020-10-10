'use strict';
const {
  sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const WorkSpaceItems = sequelize.define('WorkSpaceItems', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    createdByUserId: DataTypes.INTEGER,
    contact_id: DataTypes.INTEGER,
    product_has_messageTemplate_id: DataTypes.INTEGER,
    queue_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
    scheduleDateTime: DataTypes.DATE,
    scheduleNewDateTime: DataTypes.DATE,
    deliveredDateTime: DataTypes.DATE,
    cancelledDateTime: DataTypes.DATE,
    delivered: DataTypes.BOOLEAN,
    queuePosition: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'WorkSpaceItems'});
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    WorkSpaceItems.associate = function(models) {
      // define association here
      WorkSpaceItems.belongsTo(models.Users);
      WorkSpaceItems.belongsTo(models.Products_has_MessagesTemplates);
      WorkSpaceItems.belongsTo(models.Contacts);
      WorkSpaceItems.belongsTo(models.Queues);
      models.Users.hasMany(WorkSpaceItems,{
        foreignKey: 'createdByUserId'
      });
      models.Products_has_MessagesTemplates.hasMany(WorkSpaceItems,{
        foreignKey: 'product_has_messageTemplate_id'
      });
      models.Contacts.hasMany(WorkSpaceItems,{
        foreignKey: 'contact_id'
      });
      models.Queues.hasMany(WorkSpaceItems,{
        foreignKey: 'queue_id'
      });
    }
  return WorkSpaceItems;
};