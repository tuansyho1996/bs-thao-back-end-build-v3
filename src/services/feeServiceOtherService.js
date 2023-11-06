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

module.exports = {
  handlefetchFeeServiceOther, handleCreateFeeServiceOther,
  handleEditFeeServiceOther, handleDeleteFeeServiceOther
}
