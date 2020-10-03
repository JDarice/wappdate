'use strict';
const {
  sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Queues = sequelize.define('Queues', {
    createdByUserId: DataTypes.INTEGER,
    queueName: DataTypes.STRING,
    queueType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Queues'});
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    Queues.associate = function(models) {
      // define association here
      Queues.belongsTo(models.Users);
      models.Users.hasMany(Queues,{
        foreignKey: 'createdByUserId'
      });
    }
  return Queues;
};