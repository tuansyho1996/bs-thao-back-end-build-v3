'use strict';
const {
  Model, TEXT
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ecg extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Ecg.init({
    patientId: DataTypes.INTEGER,
    statusUse: DataTypes.BOOLEAN,
    result: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Ecg',
  });
  return Ecg;
};

