import {
  handleFetchConsider, handleCreateConsider, handleEditConsider,
  handleDeleteConsider
} from '../services/considerSevice'



let createConsider = async (req, res) => {
  try {
    let responsive = await handleCreateConsider(req.body);
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}
let fetchConsider = async (req, res) => {
  try {
    let responsive = await handleFetchConsider();
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}

let editConsider = async (req, res) => {
  try {
    let responsive = await handleEditConsider(req.body);
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}

let deleteConsider = async (req, res) => {
  try {
    let responsive = await handleDeleteConsider(req.params.id);
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}

module.exports = {
  createConsider, fetchConsider, editConsider,
  deleteConsider
}