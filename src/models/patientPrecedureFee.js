'use strict';
const {
  Model, TEXT
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PatientPrecedureFee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PatientPrecedureFee.belongsTo(models.Patient, { foreignKey: 'patientId' })
    }
  };
  
  PatientPrecedureFee.init({
    patientId: DataTypes.INTEGER,
    typePrecedureFees: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'PatientPrecedureFee',
  });
  return PatientPrecedureFee;
};

