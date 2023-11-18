import {
  handleFetchPrecedureFee, handleCreatePrecedureFee,
  handleEditPrecedureFee, handleDeletePrecedureFee,
  handleAddUpdatePrecedureFeePatient, handleFetchPrecedureFeeAndExaminationFee
} from '../services/precedureFeeService'




let fetchPrecedureFee = async (req, res) => {
  try {
    let responsive = await handleFetchPrecedureFee();
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}

let createPrecedureFee = async (req, res) => {
  try {
    let responsive = await handleCreatePrecedureFee(req.body);
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}

let editPrecedureFee = async (req, res) => {
  try {
    let responsive = await handleEditPrecedureFee(req.body);
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}

let deletePrecedureFee = async (req, res) => {
  try {
    let responsive = await handleDeletePrecedureFee(req.params.id);
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}

let addUpdatePrecedureFeePatient = async (req, res) => {
  try {
    let responsive = await handleAddUpdatePrecedureFeePatient(req.body);
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}

let fetchPrecedureFeeAndExaminationFee = async (req, res) => {
  try {
    let responsive = await handleFetchPrecedureFeeAndExaminationFee();
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}

module.exports = {
  fetchPrecedureFee, createPrecedureFee,
  editPrecedureFee, deletePrecedureFee,
  addUpdatePrecedureFeePatient,
  fetchPrecedureFeeAndExaminationFee
}