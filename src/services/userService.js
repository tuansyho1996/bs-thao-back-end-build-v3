import db from '../models/index.js'
import _ from 'lodash'
import bcrypt from "bcrypt";
const salt = bcrypt.genSaltSync(10);

let hashPasswordFromBcryt = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    }
    catch (e) {
      reject(e)
    }
  })
}
let compareSync = (password, passwordHash) => {
  return new Promise(async (resolve, reject) => {
    try {
      const isPassword = bcrypt.compareSync(password, passwordHash);
      resolve(isPassword);
    }
    catch (e) {
      reject(e)
    }
  })
}

let isEmailCheck = async (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const isEmail = await db.User.findOne({ where: { email }, raw: true });
      if (isEmail !== null) {
        resolve(true)
      }
      else {
        resolve(false)
      }
    }
    catch (e) {
      reject(e)
    }
  })
}

let handleCreateUser = (user) => {
  return new Promise(async (resovle, reject) => {
    try {
      let passwordHash = await hashPasswordFromBcryt(user.password)
      await db.User.create({ email: user.email, password: passwordHash });
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


let handleLoginUser = (user) => {
  return new Promise(async (resovle, reject) => {
    try {
      const isEmail = await isEmailCheck(user.email);
      if (isEmail) {
        const userDb = await db.User.findOne({ where: { email: user.email }, raw: true });
        const isPassword = await compareSync(user.password, userDb.password)
        if (isPassword) {
          resovle({
            errorCode: 0,
            message: 'ok',
          })
        }
        else {
          resovle({
            errorCode: 1,
            message: 'mật khẩu không đúng'
          })
        }
      }
      else {
        resovle({
          errorCode: 1,
          message: 'email không tồn tại '
        })
      }

    }
    catch (e) {
      reject(e)
    }
  })
}
module.exports = {
  handleCreateUser,
  handleLoginUser
}