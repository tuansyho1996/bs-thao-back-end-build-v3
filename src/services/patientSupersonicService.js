import db from '../models/index.js'
import _ from 'lodash'

let handleAddSupersonic = (data) => {
  return new Promise(async (resovle, reject) => {
    try {
      console.log(data)
      let patientSupersonicDb = await db.PatientSupersonic.findOne({ where: { patientId: data.patientId } })
      if (patientSupersonicDb) {
        const supersonicType = await db.Supersonic.findOne({ where: { name: data.supersonicType } });
        data.price = supersonicType.price
        await db.PatientSupersonic.update(data, { where: { patientId: data.patientId } })
        resovle({
          errorCode: 0,
          message: 'ok',
        })
      }
      else {
        const supersonicType = await db.Supersonic.findOne({ where: { name: data.supersonicType } });
        data.price = supersonicType.price
        await db.PatientSupersonic.create(data)
        resovle({
          errorCode: 0,
          message: 'ok',
        })
      }
    }
    catch (e) {
      reject(e)
    }
  })
}
module.exports = {
  handleAddSupersonic
}
