import {
  handleCreateSupersonic,
  handleFetchSupersonic,
  handleEditSupersonic, handleDeleteSupersonic
} from '../services/supersonicService'

let createSupersonic = async (req, res) => {
  try {
    let responsive = await handleCreateSupersonic(req.body);
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}

let fetchSupersonic = async (req, res) => {
  try {
    let responsive = await handleFetchSupersonic();
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}

let editSupersonic = async (req, res) => {
  try {
    let responsive = await handleEditSupersonic(req.body);
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}

let deleteSupersonic = async (req, res) => {
  try {
    let responsive = await handleDeleteSupersonic(req.params.id);
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}

module.exports = {
  createSupersonic, fetchSupersonic,
  editSupersonic, deleteSupersonic
}