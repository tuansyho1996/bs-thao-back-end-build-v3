import {
  handleaddOrUpdatePatientConsiders,
} from '../services/patientConsiderSevice'



let addOrUpdatePatientConsiders = async (req, res) => {
  try {
    let responsive = await handleaddOrUpdatePatientConsiders(req.body);
    res.status(200).json(responsive)
  }
  catch (e) {
    console.log(e)
  }
}

module.exports = {
  addOrUpdatePatientConsiders,
}