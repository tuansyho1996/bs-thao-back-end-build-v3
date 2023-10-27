'use strict';
const {
  Model, TEXT
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Consider extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Consider.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Consider',
  });
  return Consider;
};

