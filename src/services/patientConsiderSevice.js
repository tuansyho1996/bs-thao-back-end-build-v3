import db from '../models/index.js'
import _ from 'lodash'

let handleaddOrUpdatePatientConsiders = (data) => {
  return new Promise(async (resovle, reject) => {
    try {
      let patientConsiderDb = await db.PatientConsider.findOne({ where: { patientId: data.patientId } })
      if (patientConsiderDb) {
        const typeConsider = await db.Consider.findOne({ where: { name: data.typeConsider } });
        data.price = typeConsider.price
        await db.PatientConsider.update(data, { where: { patientId: data.patientId } })
      }
      else {
        const typeConsider = await db.Consider.findOne({ where: { name: data.typeConsider } });
        data.price = typeConsider.price
        await db.PatientConsider.create(data)
      }
      resovle({
        errorCode: 0,
        message: 'ok',
      })
    }
    catch (e) {
      reject(e)
    }
  })
}
module.exports = {
  handleaddOrUpdatePatientConsiders
}
