import {
  handlefetchFeeServiceOther, handleCreateFeeServiceOther,
  handleEditFeeServiceOther, handleDeleteFeeServiceOther,
  handleAddUpdateEcgPatient, handleAddUpdateObstetricMonitoringPatient
} from '../services/feeServiceOtherService'



let fetchFeeServiceOther = async (req, res) => {
  try {
    let responsive = await handlefetchFeeServiceOther();
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}

let createFeeServiceOther = async (req, res) => {
  try {
    let responsive = await handleCreateFeeServiceOther(req.body);
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}

let editFeeServiceOther = async (req, res) => {
  try {
    let responsive = await handleEditFeeServiceOther(req.body);
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}

let deleteFeeServiceOther = async (req, res) => {
  try {
    let responsive = await handleDeleteFeeServiceOther(req.params.id);
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}

let addUpdateEcgPatient = async (req, res) => {
  try {
    let responsive = await handleAddUpdateEcgPatient(req.body);
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}

let addUpdateObstetricMonitoringPatient = async (req, res) => {
  try {
    let responsive = await handleAddUpdateObstetricMonitoringPatient(req.body);
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}

// let fetchEcgPatient = async (req, res) => {
//   try {
//     let responsive = await handleFetchEcgPatient();
//     res.status(200).json(responsive)
//   }
//   catch (e) {
//     console.log(e)
//   }
// }

module.exports = {
  fetchFeeServiceOther, createFeeServiceOther,
  editFeeServiceOther, deleteFeeServiceOther,
  addUpdateEcgPatient, addUpdateObstetricMonitoringPatient
}