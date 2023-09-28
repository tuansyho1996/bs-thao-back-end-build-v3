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
      let res = await db.Patient.findAll();
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
module.exports = {
  handleCreatePatient,
  handleFetchPatient,
  handleDeletePatient,
  handleEditPatient,
  handleAddMedicalTreatmentPatient,
  handleAddConsiderPatient
}