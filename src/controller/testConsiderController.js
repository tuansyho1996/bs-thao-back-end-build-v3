import {
  handleFetchTestConsider, handleCreateTestConsider, handleEditTestConsider,
  handleDeleteTestConsider, handleFetchConsiderAndTestConsider
} from '../services/testConsiderService'



let createTestConsider = async (req, res) => {
  try {
    let responsive = await handleCreateTestConsider(req.body);
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}
let fetchTestConsider = async (req, res) => {
  try {
    let responsive = await handleFetchTestConsider();
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}

let editTestConsider = async (req, res) => {
  try {
    let responsive = await handleEditTestConsider(req.body);
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}

let deleteTestConsider = async (req, res) => {
  try {
    let responsive = await handleDeleteTestConsider(req.params.id);
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}

let fetchConsiderAndTestConsider = async (req, res) => {
  try {
    let responsive = await handleFetchConsiderAndTestConsider();
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}

module.exports = {
  createTestConsider, fetchTestConsider, editTestConsider,
  deleteTestConsider, fetchConsiderAndTestConsider
}