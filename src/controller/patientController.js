import {
  handleCreatePatient, handleFetchPatient, handleDeletePatient,
  handleEditPatient, handleAddMedicalTreatmentPatient,
  handleAddConsiderPatient, handleFetchMedicine,
  handleCreateMedicine, handleEditMedicine,
  handleDeleteMedicine, handleAddPrescription, handleAddSupersonic,
  handleAddQuantityMedicine, handleFetchPrescription,
  handlefetchDetailPatient
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
let fetchMedicine = async (req, res) => {
  try {
    let responsive = await handleFetchMedicine();
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}
let createMedicine = async (req, res) => {
  try {
    let responsive = await handleCreateMedicine(req.body);
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}
let editMedicine = async (req, res) => {
  try {
    let responsive = await handleEditMedicine(req.body);
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}
let deleteMedicine = async (req, res) => {
  try {
    let responsive = await handleDeleteMedicine(req.params.id);
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}
let addPrescription = async (req, res) => {
  try {
    let responsive = await handleAddPrescription(req.body);
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}
let addSupersonic = async (req, res) => {
  try {
    let responsive = await handleAddSupersonic(req.body);
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}
let addQuantityMedicine = async (req, res) => {
  try {
    let responsive = await handleAddQuantityMedicine(req.body);
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}
let fetchPrescription = async (req, res) => {
  try {
    let responsive = await handleFetchPrescription();
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}
let fetchDetailPatient = async (req, res) => {
  try {
    let responsive = await handlefetchDetailPatient(req.params.id);
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}
module.exports = {
  createPatient, fetchPatient, deletePatient, editPatient,
  addMedicalTreatmentPatient, addconsiderPatient,
  fetchMedicine, createMedicine, editMedicine,
  deleteMedicine, addPrescription, addSupersonic,
  addQuantityMedicine, fetchPrescription, fetchDetailPatient
}