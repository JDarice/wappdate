'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('WorkSpaceItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      createdByUserId: {
        type: Sequelize.INTEGER
      },
      contact_id: {
        type: Sequelize.INTEGER
      },
      product_has_messageTemplate_id: {
        type: Sequelize.INTEGER
      },
      queue_id: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      scheduleDateTime: {
        type: Sequelize.DATE
      },
      scheduleNewDateTime: {
        type: Sequelize.DATE
      },
      deliveredDateTime: {
        type: Sequelize.DATE
      },
      cancelledDateTime: {
        type: Sequelize.DATE
      },
      delivered: {
        type: Sequelize.BOOLEAN
      },
      queuePosition: {
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
    await queryInterface.dropTable('WorkSpaceItems');
  }
};