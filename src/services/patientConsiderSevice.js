import db from '../models/index.js'
import _ from 'lodash'

let handleAddOrUpdatePatientConsiders = (data) => {
  return new Promise(async (resovle, reject) => {
    try {
      let patientConsiderDb = await db.PatientConsider.findOne({ where: { patientId: data.patientId } })
      if (data.typeConsider) {
        const typeConsider = await db.Consider.findOne({ where: { name: data.typeConsider } });
        data.price = typeConsider.price
      }
      else {
        data.price = 0
      }
      if (data.typeTestConsider) {
        const typeTestConsider = await db.TestConsider.findOne({ where: { name: data.typeTestConsider } });
        data.priceTest = typeTestConsider.price
      }
      else {
        data.priceTest = 0
      }
      if (patientConsiderDb) {
        await db.PatientConsider.update(data, { where: { patientId: data.patientId } })
      }
      else {
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
  handleAddOrUpdatePatientConsiders
}
