import db from '../models/index.js'
import _ from 'lodash'


let handleCreatePatient = (data) => {
  return new Promise(async (resovle, reject) => {
    try {
      let res = await db.Patient.create(data);
      resovle({
        errorCode: 0,
        message: 'ok',
        user: res
      })
    }
    catch (e) {
      reject(e)
    }
  })
}
let handleFetchPatient = () => {
  return new Promise(async (resovle, reject) => {
    try {
      let res = await db.Patient.findAll({
        include: [
          { model: db.Prescription },
        ],
        raw: true,
        nest: true
      });
      resovle({
        errorCode: 0,
        message: 'ok',
        res: res.reverse()
      })
    }
    catch (e) {
      reject(e)
    }
  })
}
let handleDeletePatient = (id) => {
  return new Promise(async (resovle, reject) => {
    try {
      await db.Patient.destroy({ where: { id } });
      resovle({
        errorCode: 0,
        message: 'ok',
      })
    }
    catch (e) {
      reject(e)
    }
  })
}
let handleEditPatient = (patient) => {
  return new Promise(async (resovle, reject) => {
    try {
      await db.Patient.update(patient, { where: { id: patient.id } });
      resovle({
        errorCode: 0,
        message: 'ok',
      })
    }
    catch (e) {
      reject(e)
    }
  })
}
let handleAddMedicalTreatmentPatient = (medicalTreatment) => {
  return new Promise(async (resovle, reject) => {
    try {
      await db.Patient.update(medicalTreatment, { where: { id: medicalTreatment.id } });
      resovle({
        errorCode: 0,
        message: 'ok',
      })
    }
    catch (e) {
      reject(e)
    }
  })
}
let handleAddConsiderPatient = (consider) => {
  return new Promise(async (resovle, reject) => {
    try {
      await db.Patient.update(consider, { where: { id: consider.id } });
      resovle({
        errorCode: 0,
        message: 'ok',
      })
    }
    catch (e) {
      reject(e)
    }
  })
}
let handleFetchMedicine = () => {
  return new Promise(async (resovle, reject) => {
    try {
      let res = await db.Medicine.findAll();
      resovle({
        errorCode: 0,
        message: 'ok',
        res
      })
    }
    catch (e) {
      reject(e)
    }
  })
}
let handleCreateMedicine = (medicine) => {
  return new Promise(async (resovle, reject) => {
    try {
      await db.Medicine.create(medicine);
      resovle({
        errorCode: 0,
        message: 'ok',
      })
    }
    catch (e) {
      reject(e)
    }
  })
}
let handleEditMedicine = (medicine) => {
  return new Promise(async (resovle, reject) => {
    try {
      await db.Medicine.update(medicine, { where: { id: medicine.id } });
      resovle({
        errorCode: 0,
        message: 'ok',
      })
    }
    catch (e) {
      reject(e)
    }
  })
}
let handleDeleteMedicine = (id) => {
  return new Promise(async (resovle, reject) => {
    try {
      await db.Medicine.destroy({ where: { id } });
      resovle({
        errorCode: 0,
        message: 'ok',
      })
    }
    catch (e) {
      reject(e)
    }
  })
}
let handleAddPrescription = (prescription) => {
  return new Promise(async (resovle, reject) => {
    try {

      const findPrescription = await db.Prescription.findOne({ where: { patientId: prescription.patientId } })
      if (findPrescription === null) {
        await db.Prescription.create(prescription)
      }
      else {
        await db.Prescription.update(prescription, { where: { patientId: prescription.patientId } })
      }
      resovle({
        errorCode: 0,
        message: 'ok',
      })
    }
    catch (e) {
      reject(e)
    }
  })
}
module.exports = {
  handleCreatePatient, handleFetchPatient, handleDeletePatient,
  handleEditPatient, handleAddMedicalTreatmentPatient,
  handleAddConsiderPatient, handleFetchMedicine, handleCreateMedicine,
  handleEditMedicine, handleDeleteMedicine, handleAddPrescription
}