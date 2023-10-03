'use strict';
const {
  Model, TEXT
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prescription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Prescription.belongsTo(models.Patient, { foreignKey: 'patientId' })
    }
  };
  Prescription.init({
    patientId: DataTypes.INTEGER,
    nameMedicine_1: DataTypes.STRING,
    nameMedicine_2: DataTypes.STRING,
    nameMedicine_3: DataTypes.STRING,
    nameMedicine_4: DataTypes.STRING,
    nameMedicine_5: DataTypes.STRING,
    nameMedicine_6: DataTypes.STRING,
    nameMedicine_7: DataTypes.STRING,
    nameMedicine_8: DataTypes.STRING,
    quantityMedicine_1: DataTypes.INTEGER,
    quantityMedicine_2: DataTypes.INTEGER,
    quantityMedicine_3: DataTypes.INTEGER,
    quantityMedicine_4: DataTypes.INTEGER,
    quantityMedicine_5: DataTypes.INTEGER,
    quantityMedicine_6: DataTypes.INTEGER,
    quantityMedicine_7: DataTypes.INTEGER,
    quantityMedicine_8: DataTypes.INTEGER,
    priceMedicine_1: DataTypes.INTEGER,
    priceMedicine_2: DataTypes.INTEGER,
    priceMedicine_3: DataTypes.INTEGER,
    priceMedicine_4: DataTypes.INTEGER,
    priceMedicine_5: DataTypes.INTEGER,
    priceMedicine_6: DataTypes.INTEGER,
    priceMedicine_7: DataTypes.INTEGER,
    priceMedicine_8: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'Prescription',
  });
  return Prescription;
};

