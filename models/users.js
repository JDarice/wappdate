const {
  sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    status: DataTypes.STRING,
    lastLogin: DataTypes.DATE,
    loginCounter: DataTypes.INTEGER,
    createdByUserId: DataTypes.INTEGER
  },{});
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    Users.associate = function(models) {      
      Users.hasMany(Users);
    }
    console.log(Users);
  return Users;
};