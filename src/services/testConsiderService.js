import db from '../models/index.js'
import _ from 'lodash'

let handleFetchTestConsider = () => {
  return new Promise(async (resovle, reject) => {
    try {
      let res = await db.TestConsider.findAll();
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

let handleCreateTestConsider = (testConsider) => {
  return new Promise(async (resovle, reject) => {
    try {
      if (testConsider.name && testConsider.price !== 0) {
        await db.TestConsider.create(testConsider);
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

let handleEditTestConsider = (testConsider) => {
  return new Promise(async (resovle, reject) => {
    try {
      if (testConsider.name && testConsider.price) {
        await db.TestConsider.update(testConsider, { where: { id: testConsider.id } });
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

let handleDeleteTestConsider = (id) => {
  return new Promise(async (resovle, reject) => {
    try {
      await db.TestConsider.destroy({ where: { id } });
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
let handleFetchConsiderAndTestConsider = () => {
  return new Promise(async (resovle, reject) => {
    try {
      let resTestConsiders = await db.TestConsider.findAll();
      let resConsiders = await db.Consider.findAll();
      resovle({
        errorCode: 0,
        message: 'ok',
        res: { testConsiders: resTestConsiders, considers: resConsiders }
      })
    }
    catch (e) {
      reject(e)
    }
  })
}
module.exports = {
  handleFetchTestConsider, handleCreateTestConsider, handleEditTestConsider,
  handleDeleteTestConsider, handleFetchConsiderAndTestConsider
}