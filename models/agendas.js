'use strict';
const {
  sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Agendas = sequelize.define('Agendas', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
createdByUserId: DataTypes.INTEGER,
    workSpaceItem_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Agendas'});
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    Agendas.associate = function(models) {
      // define association here
      Agendas.belongsTo(models.Users);
      Agendas.belongsTo(models.WorkSpaceItems);
      models.Users.hasMany(Agendas,{
        foreignKey: 'createdByUserId'
      });
      models.WorkSpaceItems.hasMany(Agendas,{
        foreignKey: 'workSpaceItem_id'
      });
    }
  return Agendas;
};