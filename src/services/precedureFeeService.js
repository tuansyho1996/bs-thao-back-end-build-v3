import db from '../models/index.js'
import _ from 'lodash'


let handleFetchPrecedureFee = () => {
  return new Promise(async (resovle, reject) => {
    try {
      const res = await db.PrecedureFee.findAll()
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

let handleCreatePrecedureFee = (data) => {
  return new Promise(async (resovle, reject) => {
    try {
      await db.PrecedureFee.create(data)
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
let handleEditPrecedureFee = (data) => {
  return new Promise(async (resovle, reject) => {
    try {
      await db.PrecedureFee.update(data, { where: { id: data.id } })
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
let handleDeletePrecedureFee = (id) => {
  return new Promise(async (resovle, reject) => {
    try {
      await db.PrecedureFee.destroy({ where: { id: id } })
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

let handleAddUpdatePrecedureFeePatient = (data) => {
  return new Promise(async (resovle, reject) => {
    try {
      let isPrecedureFee = await db.PatientPrecedureFee.findOne({ where: { patientId: data.patientId } })
      if (isPrecedureFee) {
        await db.PatientPrecedureFee.update(data, { where: { patientId: data.patientId } })
        resovle({
          errorCode: 0,
          message: 'thay đổi phí thủ thuật cho bệnh nhân thành công',
        })
      }
      else {
        await db.PatientPrecedureFee.create(data)
        resovle({
          errorCode: 0,
          message: 'tạo  phí thủ thuật cho bệnh nhân thành công',
        })
      }
    }
    catch (e) {
      reject(e)
    }
  })
}
let handleFetchPrecedureFeeAndExaminationFee = () => {
  return new Promise(async (resovle, reject) => {
    try {
      const resPrecedureFee = await db.PrecedureFee.findAll()
      const resFeeServiceOther = await db.FeeServiceOther.findAll();
      const examinationFee = resFeeServiceOther.filter(item => item.name === "Tiền công khám")
      resovle({
        errorCode: 0,
        message: 'ok',
        res: { precedureFees: resPrecedureFee, examinationFee }
      })
    }
    catch (e) {
      reject(e)
    }
  })
}

module.exports = {
  handleFetchPrecedureFee, handleCreatePrecedureFee,
  handleEditPrecedureFee, handleDeletePrecedureFee,
  handleAddUpdatePrecedureFeePatient, handleFetchPrecedureFeeAndExaminationFee
}