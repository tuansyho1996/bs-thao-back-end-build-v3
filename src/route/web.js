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


    return app.use('/', router);
}
export default initWebRouter;
