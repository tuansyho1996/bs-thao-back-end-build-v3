import db from '../models/index.js'
import _ from 'lodash'

let handleFetchConsider = () => {
  return new Promise(async (resovle, reject) => {
    try {
      let res = await db.Consider.findAll();
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

let handleCreateConsider = (consider) => {
  return new Promise(async (resovle, reject) => {
    try {
      if (consider.name && consider.price !== 0) {
        let res = await db.Consider.create(consider);
        resovle({
          errorCode: 0,
          message: 'ok',
        })
      }
      else {
        resovle({
          errorCode: 1,
          message: 'tên xét nghiệm hoặc giá chưa điền',
        })
      }

    }
    catch (e) {
      reject(e)
    }
  })
}

let handleEditConsider = (consider) => {
  return new Promise(async (resovle, reject) => {
    try {
      if (consider.name && consider.price) {
        await db.Consider.update(consider, { where: { id: consider.id } });
        resovle({
          errorCode: 0,
          message: 'ok',
        })
      }
      else {
        resovle({
          errorCode: 1,
          message: 'tên xét nghiệm hoặc giá chưa điền',
        })
      }

    }
    catch (e) {
      reject(e)
    }
  })
}

let handleDeleteConsider = (id) => {
  return new Promise(async (resovle, reject) => {
    try {
      await db.Consider.destroy({ where: { id } });
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
  handleFetchConsider, handleCreateConsider, handleEditConsider,
  handleDeleteConsider
}