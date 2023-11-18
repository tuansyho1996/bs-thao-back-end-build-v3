import db from '../models/index.js'
import _ from 'lodash'

let handlefetchFeeServiceOther = () => {
  return new Promise(async (resovle, reject) => {
    try {
      const res = await db.FeeServiceOther.findAll()
      resovle({
        errorCode: 0,
        message: 'ok',
        res
      })
    }
    catch (e) {
      reject(e)
    }
  })
}

let handleCreateFeeServiceOther = (data) => {
  return new Promise(async (resovle, reject) => {
    try {
      await db.FeeServiceOther.create(data)
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

let handleEditFeeServiceOther = (data) => {
  return new Promise(async (resovle, reject) => {
    try {
      await db.FeeServiceOther.update(data, { where: { id: data.id } })
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

let handleDeleteFeeServiceOther = (id) => {
  return new Promise(async (resovle, reject) => {
    try {
      await db.FeeServiceOther.destroy({ where: { id: id } })
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

let handleAddUpdateEcgPatient = (data) => {
  return new Promise(async (resovle, reject) => {
    try {
      let isEcgPatient = await db.Ecg.findOne({ where: { patientId: data.patientId } });
      const findEcg = await db.Supersonic.findOne({ where: { id: 2 } });
      data.price = findEcg.price
      if (isEcgPatient) {
        await db.Ecg.update(data, { where: { patientId: data.patientId } })
        resovle({
          errorCode: 0,
          message: 'ok',
        })
      }
      else {
        await db.Ecg.create(data)
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

let handleAddUpdateObstetricMonitoringPatient = (data) => {
  return new Promise(async (resovle, reject) => {
    try {
      let isObstetricMonitoringPatient = await db.ObstetricMonitoring.findOne({ where: { patientId: data.patientId } });
      const findObstetricMonitoring = await db.Supersonic.findOne({ where: { id: 3 } });
      data.price = findObstetricMonitoring.price
      if (isObstetricMonitoringPatient) {
        await db.ObstetricMonitoring.update(data, { where: { patientId: data.patientId } })
        resovle({
          errorCode: 0,
          message: 'ok',
        })
      }
      else {
        await db.ObstetricMonitoring.create(data)
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

// let fetchEcgPatient = () => {
//   return new Promise(async (resovle, reject) => {
//     try {
//       let res = await db.Ecg.findAll();
//       resovle({
//         errorCode: 0,
//         message: 'ok',
//         res
//       })
//     }
//     catch (e) {
//       reject(e)
//     }
//   })
// }

module.exports = {
  handlefetchFeeServiceOther, handleCreateFeeServiceOther,
  handleEditFeeServiceOther, handleDeleteFeeServiceOther,
  handleAddUpdateEcgPatient, handleAddUpdateObstetricMonitoringPatient
}
