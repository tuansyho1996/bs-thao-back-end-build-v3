import {
  handleCreatePatient, handleFetchPatient, handleDeletePatient,
  handleEditPatient, handleAddMedicalTreatmentPatient,
  handleAddConsiderPatient
} from '../services/patientService'

let createPatient = async (req, res) => {
  try {
    let responsive = await handleCreatePatient(req.body);
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}
let fetchPatient = async (req, res) => {
  try {
    let responsive = await handleFetchPatient();
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}
let deletePatient = async (req, res) => {
  try {
    let responsive = await handleDeletePatient(req.params.id);
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}
let editPatient = async (req, res) => {
  try {
    let responsive = await handleEditPatient(req.body);
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}
let addMedicalTreatmentPatient = async (req, res) => {
  try {
    let responsive = await handleAddMedicalTreatmentPatient(req.body);
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}
let addconsiderPatient = async (req, res) => {
  try {
    let responsive = await handleAddConsiderPatient(req.body);
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}
module.exports = {
  createPatient,
  fetchPatient,
  deletePatient,
  editPatient,
  addMedicalTreatmentPatient,
  addconsiderPatient
}