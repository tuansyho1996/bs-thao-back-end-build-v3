'use strict';
const {
  Model, TEXT
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PatientConsider extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PatientConsider.belongsTo(models.Patient, { foreignKey: 'patientId' })
    }
  };
  PatientConsider.init({
    patientId: DataTypes.INTEGER,
    typeConsider: DataTypes.STRING,
    resultConsider: DataTypes.STRING,
    price: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'PatientConsider',
  });
  return PatientConsider;
};

