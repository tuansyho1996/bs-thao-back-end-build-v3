'use strict';
const {
  Model, TEXT
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ObstetricMonitoring extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ObstetricMonitoring.belongsTo(models.Patient, { foreignKey: 'patientId' })
      // define association here
    }
  };
  ObstetricMonitoring.init({
    patientId: DataTypes.INTEGER,
    statusUse: DataTypes.BOOLEAN,
    result: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'ObstetricMonitoring',
  });
  return ObstetricMonitoring;
};

