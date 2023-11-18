'use strict';
const {
  Model, TEXT
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PatientSupersonic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PatientSupersonic.belongsTo(models.Patient, { foreignKey: 'patientId' })
    }
  };
  PatientSupersonic.init({
    patientId: DataTypes.INTEGER,
    supersonicType: DataTypes.STRING,
    supersonicDiagnosis: DataTypes.STRING,
    price: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'PatientSupersonic',
  });
  return PatientSupersonic;
};

