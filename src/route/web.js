import express from "express";
import patientController from "../controller/patientController"



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


    return app.use('/', router);
}
export default initWebRouter;
