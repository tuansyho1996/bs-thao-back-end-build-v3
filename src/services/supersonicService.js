import db from '../models/index.js'
import _ from 'lodash'

let handleCreateSupersonic = (data) => {
  return new Promise(async (resovle, reject) => {
    try {
      await db.Supersonic.create(data);
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

let handleFetchSupersonic = () => {
  return new Promise(async (resovle, reject) => {
    try {
      let res = await db.Supersonic.findAll();
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

let handleEditSupersonic = (data) => {
  return new Promise(async (resovle, reject) => {
    try {
      let res = await db.Supersonic.update(data, { where: { id: data.id } });
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

let handleDeleteSupersonic = (id) => {
  return new Promise(async (resovle, reject) => {
    try {
      let res = await db.Supersonic.destroy({ where: { id } });
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
module.exports = {
  handleCreateSupersonic, handleFetchSupersonic,
  handleEditSupersonic, handleDeleteSupersonic
}