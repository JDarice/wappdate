'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MessageTemplates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      createdByUserId: {
        type: Sequelize.INTEGER
      },
      messageChannelSettings_id: {
        type: Sequelize.INTEGER
      },
      messageName: {
        type: Sequelize.STRING
      },
      messageChannel: {
        type: Sequelize.STRING
      },
      messageContent: {
        type: Sequelize.STRING
      },
      hasSpecialCharacter: {
        type: Sequelize.BOOLEAN
      },
      countOfUsedCharacters: {
        type: Sequelize.INTEGER
      },
      countOfAvailableCharacters: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('MessageTemplates');
  }
};