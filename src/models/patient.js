'use strict';
const {
    Model, TEXT
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Patient extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Patient.init({
        name: DataTypes.STRING,
        codePatient: DataTypes.STRING,
        phoneNumber: DataTypes.STRING,
        address: DataTypes.STRING,
        birthdate: DataTypes.STRING,
        gender: DataTypes.STRING,
        reasonMedicalTreatment: DataTypes.TEXT,
        symptoms: DataTypes.TEXT,
        diagnostic: DataTypes.TEXT,
        bloodTest: DataTypes.TEXT,
        sputumTest: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'Patient',
    });
    return Patient;
};

