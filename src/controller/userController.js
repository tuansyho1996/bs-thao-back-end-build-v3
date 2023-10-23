import {
  handleCreateUser, handleLoginUser
} from '../services/userService'



let createUser = async (req, res) => {
  try {
    let responsive = await handleCreateUser(req.body);
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}
let loginUser = async (req, res) => {
  try {
    let responsive = await handleLoginUser(req.body);
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}
module.exports = {
  createUser, loginUser
}