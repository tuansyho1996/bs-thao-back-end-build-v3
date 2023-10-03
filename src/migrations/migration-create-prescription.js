'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Prescriptions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patientId: {
        type: Sequelize.INTEGER
      },
      nameMedicine_1: {
        type: Sequelize.STRING
      },
      nameMedicine_2: {
        type: Sequelize.STRING
      },
      nameMedicine_3: {
        type: Sequelize.STRING
      },
      nameMedicine_4: {
        type: Sequelize.STRING
      },
      nameMedicine_5: {
        type: Sequelize.STRING
      },
      nameMedicine_6: {
        type: Sequelize.STRING
      },
      nameMedicine_7: {
        type: Sequelize.STRING
      },
      nameMedicine_8: {
        type: Sequelize.STRING
      },
      quantityMedicine_1: {
        type: Sequelize.INTEGER
      },
      quantityMedicine_2: {
        type: Sequelize.INTEGER
      },
      quantityMedicine_3: {
        type: Sequelize.INTEGER
      },
      quantityMedicine_4: {
        type: Sequelize.INTEGER
      },
      quantityMedicine_5: {
        type: Sequelize.INTEGER
      },
      quantityMedicine_6: {
        type: Sequelize.INTEGER
      },
      quantityMedicine_7: {
        type: Sequelize.INTEGER
      },
      quantityMedicine_8: {
        type: Sequelize.INTEGER
      },
      priceMedicine_1: {
        type: Sequelize.INTEGER
      },
      priceMedicine_2: {
        type: Sequelize.INTEGER
      },
      priceMedicine_3: {
        type: Sequelize.INTEGER
      },
      priceMedicine_4: {
        type: Sequelize.INTEGER
      },
      priceMedicine_5: {
        type: Sequelize.INTEGER
      },
      priceMedicine_6: {
        type: Sequelize.INTEGER
      },
      priceMedicine_7: {
        type: Sequelize.INTEGER
      },
      priceMedicine_8: {
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
    await queryInterface.dropTable('Prescriptions');
  }
};