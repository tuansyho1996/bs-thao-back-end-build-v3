import {
  handleAddSupersonic
} from '../services/patientSupersonicService'


let addSupersonic = async (req, res) => {
  try {
    let responsive = await handleAddSupersonic(req.body);
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}

module.exports = {
  addSupersonic
}