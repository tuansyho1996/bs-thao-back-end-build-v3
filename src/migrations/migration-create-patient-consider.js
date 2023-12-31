'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PatientConsiders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patientId: {
        type: Sequelize.INTEGER
      },
      typeConsider: {
        type: Sequelize.STRING
      },
      typeTestConsider: {
        type: Sequelize.STRING
      },
      resultConsider: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      priceTest: {
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
    await queryInterface.dropTable('PatientConsiders');
  }
};