import { where } from 'sequelize';
import db from '../models/index.js'
import _ from 'lodash'


let handleCreatePatient = (data) => {
  return new Promise(async (resovle, reject) => {
    try {
      let res = await db.Patient.create(data);
      resovle({
        errorCode: 0,
        message: 'ok',
        user: res
      })
    }
    catch (e) {
      reject(e)
    }
  })
}
let handleFetchPatient = () => {
  return new Promise(async (resovle, reject) => {
    try {
      let res = await db.Patient.findAll({
        include: [
          { model: db.Prescription },
          { model: db.PatientConsider },
        ],
        order: [
          ['id', 'DESC'],
        ],
        raw: true,
        nest: true
      });
      resovle({
        errorCode: 0,
        message: 'ok',
        res: res
      })
    }
    catch (e) {
      reject(e)
    }
  })
}
let handleDeletePatient = (id) => {
  return new Promise(async (resovle, reject) => {
    try {
      await db.Patient.destroy({ where: { id } });
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
let handleEditPatient = (patient) => {
  return new Promise(async (resovle, reject) => {
    try {
      await db.Patient.update(patient, { where: { id: patient.id } });
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
let handleAddMedicalTreatmentPatient = (medicalTreatment) => {
  return new Promise(async (resovle, reject) => {
    try {
      await db.Patient.update(medicalTreatment, { where: { id: medicalTreatment.id } });
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
let handleAddConsiderPatient = (consider) => {
  return new Promise(async (resovle, reject) => {
    try {
      await db.Patient.update(consider, { where: { id: consider.id } });
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
let handleFetchMedicine = () => {
  return new Promise(async (resovle, reject) => {
    try {
      let res = await db.Medicine.findAll();
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
let handleCreateMedicine = (medicine) => {
  return new Promise(async (resovle, reject) => {
    try {
      await db.Medicine.create(medicine);
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
let handleEditMedicine = (medicine) => {
  return new Promise(async (resovle, reject) => {
    try {
      await db.Medicine.update(medicine, { where: { id: medicine.id } });
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
let handleDeleteMedicine = (id) => {
  return new Promise(async (resovle, reject) => {
    try {
      await db.Medicine.destroy({ where: { id } });
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
let handleAddPrescription = (prescription) => {
  return new Promise(async (resovle, reject) => {
    try {
      const findPrescription = await db.Prescription.findOne({ where: { patientId: prescription.patientId } })

      //create prescription
      let quantityUpdate;
      let errorNotEnough = false;
      if (findPrescription === null) {
        for (const property in prescription) {
          if (property.includes('nameMedicine_') === true && prescription[property] !== null) {
            const number = property.substring(property.length - 1);
            const findMedicine = await db.Medicine.findOne({ where: { name: prescription[property] } })
            if (findMedicine.quantity < prescription[`quantityMedicine_${number}`]) {
              errorNotEnough = true
            }
            else {
              quantityUpdate = findMedicine.quantity - prescription[`quantityMedicine_${number}`];
              await db.Medicine.update({ quantity: quantityUpdate }, { where: { name: prescription[property] } })
            }
          }
        }
        if (errorNotEnough) {
          resovle({
            errorCode: 1,
            message: `không đủ thuốc`,
          })
        }
        else {
          await db.Prescription.create(prescription);
          resovle({
            errorCode: 0,
            message: 'ok',
          })
        }
      }
      //update prescription
      else {
        for (const property in prescription) {
          if (property.includes('nameMedicine_') === true && prescription[property] !== null) {
            const number = property.substring(property.length - 1);
            if (prescription[`quantityMedicine_${number}`] && prescription[property]) {
              // const prescriptionUpdate = await db.Prescription.findOne({ where: { patientId: prescription.patientId } })
              const findMedicine = await db.Medicine.findOne({ where: { name: prescription[property] } });
              // case not press medicine
              //case name medicine same
              //case update not add medicine
              if (findMedicine.quantity < prescription[`quantityMedicine_${number}`]) {
                errorNotEnough = true
                console.log('check khong du thuoc')
              }
              else {
                if (findPrescription[property] === prescription[property]) {
                  // const isUpdateAddMedicine = false
                  if (findMedicine) {
                    quantityUpdate = findMedicine.quantity - prescription[`quantityMedicine_${number}`] + findPrescription[`quantityMedicine_${number}`];
                    await db.Medicine.update({ quantity: quantityUpdate }, { where: { name: prescription[property] } })
                  }
                }
                //name medicine not same
                else {
                  // case press medicine
                  const findMedicineBeReplace = await db.Medicine.findOne({ where: { name: findPrescription[property] } });
                  if (findPrescription[property]) {
                    const quantityNameMedicineReplacedUpdate = findMedicine.quantity - prescription[`quantityMedicine_${number}`];
                    const quantityNameMedicineBeReplacedUpdate = findMedicineBeReplace.quantity - findPrescription[`quantityMedicine_${number}`];
                    await db.Medicine.update({ quantity: quantityNameMedicineReplacedUpdate }, { where: { name: prescription[property] } })
                    await db.Medicine.update({ quantity: quantityNameMedicineBeReplacedUpdate }, { where: { name: findPrescription[property] } })

                  }
                  //case update add medicine
                  else {
                    if (findMedicine) {
                      quantityUpdate = findMedicine.quantity - prescription[`quantityMedicine_${number}`];
                      await db.Medicine.update({ quantity: quantityUpdate }, { where: { name: prescription[property] } })
                    }
                  }
                }
              }
            }
          }
        }
        if (errorNotEnough) {
          if (errorNotEnough) {
            resovle({
              errorCode: 1,
              message: `không đủ thuốc`,
            })
          }
        }
        else {
          await db.Prescription.update(prescription, { where: { patientId: prescription.patientId } });
          resovle({
            errorCode: 0,
            message: 'ok',
          })
        }
      }
    }
    catch (e) {
      reject(e)
    }
  })
}


// let handleAddPrescription = (prescription) => {
//   return new Promise(async (resovle, reject) => {
//     try {
//       const findPrescription = await db.Prescription.findOne({ where: { patientId: prescription.patientId } })
//       //create prescription
//       let quantityUpdate
//       for (const property in prescription) {
//         if (property.includes('nameMedicine_') === true && prescription[property] !== null) {
//         }}
//       if (findPrescription === null) {
//         await db.Prescription.create(prescription);
//         for (const property in prescription) {
//           if (property.includes('nameMedicine_') === true && prescription[property] !== null) {
//             const number = property.substring(property.length - 1);
//             const findMedicine = await db.Medicine.findOne({ where: { name: prescription[property] } })
//             quantityUpdate = findMedicine.quantity - prescription[`quantityMedicine_${number}`];
//             // await db.Medicine.update({ quantity: quantityUpdate }, { where: { name: prescription[property] } })
//           }
//         }

//       }
//       //update prescription
//       else {

//             const number = property.substring(property.length - 1);
//             if (prescription[`quantityMedicine_${number}`] && prescription[property]) {
//               // const prescriptionUpdate = await db.Prescription.findOne({ where: { patientId: prescription.patientId } })
//               const findMedicine = await db.Medicine.findOne({ where: { name: prescription[property] } });
//               // case not press medicine
//               //case name medicine same
//               //case update not add medicine
//               if (findPrescription[property] === prescription[property]) {
//                 // const isUpdateAddMedicine = false
//                 if (findMedicine) {
//                   quantityUpdate = findMedicine.quantity - prescription[`quantityMedicine_${number}`] + findPrescription[`quantityMedicine_${number}`];
//                   // await db.Medicine.update({ quantity: quantityUpdate }, { where: { name: prescription[property] } })

//                 }
//               }
//               //name medicine not same
//               else {
//                 // case press medicine
//                 const findMedicineBeReplace = await db.Medicine.findOne({ where: { name: findPrescription[property] } });
//                 if (findPrescription[property]) {
//                   const quantityNameMedicineReplacedUpdate = findMedicine.quantity - prescription[`quantityMedicine_${number}`];
//                   const quantityNameMedicineBeReplacedUpdate = findMedicineBeReplace.quantity - findPrescription[`quantityMedicine_${number}`];
//                   await db.Medicine.update({ quantity: quantityNameMedicineReplacedUpdate }, { where: { name: prescription[property] } })
//                   await db.Medicine.update({ quantity: quantityNameMedicineBeReplacedUpdate }, { where: { name: findPrescription[property] } })

//                 }
//                 //case update add medicine
//                 else {
//                   if (findMedicine) {
//                     quantityUpdate = findMedicine.quantity - prescription[`quantityMedicine_${number}`];
//                     await db.Medicine.update({ quantity: quantityUpdate }, { where: { name: prescription[property] } })
//                   }
//                 }
//               }
//               await db.Prescription.update({ [property]: prescription[property], [`quantityMedicine_${number}`]: prescription[`quantityMedicine_${number}`] }, { where: { patientId: prescription.patientId } });
//               resovle({
//                 errorCode: 0,
//                 message: 'ok',
//               })
//             }


//       }
//     }
//     catch (e) {
//       reject(e)
//     }
//   })
// }
let handleAddSupersonic = (supersonic) => {
  return new Promise(async (resovle, reject) => {
    try {
      await db.Patient.update(supersonic, { where: { id: supersonic.id } });
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
let handleAddQuantityMedicine = (medicine) => {
  return new Promise(async (resovle, reject) => {
    try {
      let findMedicine = await db.Medicine.findOne({ where: { id: medicine.id } });
      if (findMedicine === null) {
        console.log(`'can't not found medicine`)
      }
      else {
        medicine.quantity += findMedicine.quantity
        await db.Medicine.update({ quantity: medicine.quantity }, { where: { id: medicine.id } })
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
let handleFetchPrescription = () => {
  return new Promise(async (resovle, reject) => {
    try {
      let res = await db.Prescription.findAll();
      resovle({
        errorCode: 0,
        message: 'ok',
        res: res
      })
    }
    catch (e) {
      reject(e)
    }
  })
}
let handlefetchDetailPatient = (id) => {
  return new Promise(async (resovle, reject) => {
    try {
      let res = await db.Patient.findOne(
        {
          where: {
            id
          },
          include: [
            { model: db.Prescription },
            { model: db.PatientConsider },
          ],
          raw: true,
          nest: true
        }
      );
      resovle({
        errorCode: 0,
        message: 'ok',
        res: res
      })
    }
    catch (e) {
      reject(e)
    }
  })
}
module.exports = {
  handleCreatePatient, handleFetchPatient, handleDeletePatient,
  handleEditPatient, handleAddMedicalTreatmentPatient,
  handleAddConsiderPatient, handleFetchMedicine, handleCreateMedicine,
  handleEditMedicine, handleDeleteMedicine, handleAddPrescription,
  handleAddSupersonic, handleAddQuantityMedicine, handleFetchPrescription,
  handlefetchDetailPatient
}