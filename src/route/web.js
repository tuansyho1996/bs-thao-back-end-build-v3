import express from "express";
import patientController from "../controller/patientController"
import userController from "../controller/userController"
import considerController from "../controller/considerController"
import patientConsiderController from "../controller/patientConsiderController"
import supersonicController from "../controller/supersonicController"
import feeServiceOtherController from "../controller/feeServiceOtherController"



let router = express.Router();


const initWebRouter = (app) => {
    router.post('/api/create-patient', patientController.createPatient);
    router.get('/api/fetch-patient', patientController.fetchPatient);
    router.delete('/api/delete-patient/:id', patientController.deletePatient);
    router.put('/api/edit-patient', patientController.editPatient);
    router.put('/api/add-medical-treatment-patient', patientController.addMedicalTreatmentPatient);
    router.put('/api/add-consider-patient', patientController.addconsiderPatient);
    router.get('/api/fetch-medicine', patientController.fetchMedicine);
    router.post('/api/create-medicine', patientController.createMedicine);
    router.put('/api/edit-medicine', patientController.editMedicine);
    router.delete('/api/delete-medicine/:id', patientController.deleteMedicine);
    router.post('/api/add-prescription', patientController.addPrescription);
    router.put('/api/add-supersonic-patient', patientController.addSupersonic);
    router.put('/api/add-quantity-medicine', patientController.addQuantityMedicine);
    router.get('/api/fetch-prescription', patientController.fetchPrescription);
    router.post('/api/create-user', userController.createUser);
    router.post('/api/login-user', userController.loginUser);
    router.get('/api/fetch-consider', considerController.fetchConsider);
    router.post('/api/create-consider', considerController.createConsider);
    router.put('/api/edit-consider', considerController.editConsider);
    router.delete('/api/delete-consider/:id', considerController.deleteConsider);
    router.post('/api/add-update-consider-patient', patientConsiderController.addOrUpdatePatientConsiders);
    router.post('/api/create-supersonic', supersonicController.createSupersonic);
    router.get('/api/fetch-supersonic', supersonicController.fetchSupersonic);
    router.put('/api/edit-supersonic', supersonicController.editSupersonic);
    router.delete('/api/delete-supersonic/:id', supersonicController.deleteSupersonic);
    router.get('/api/fetch-detail-patient/:id', patientController.fetchDetailPatient);
    router.get('/api/fetch-fee-service-other', feeServiceOtherController.fetchFeeServiceOther);
    router.post('/api/create-fee-service-other', feeServiceOtherController.createFeeServiceOther);
    router.put('/api/edit-fee-service-other', feeServiceOtherController.editFeeServiceOther);
    router.delete('/api/delete-fee-service-other/:id', feeServiceOtherController.deleteFeeServiceOther);




    return app.use('/', router);
}
export default initWebRouter;
