import express from "express";
import patientController from "../controller/patientController"



let router = express.Router();


const initWebRouter = (app) => {
    router.post('/api/create-patient', patientController.createPatient);
    router.get('/api/fetch-patient', patientController.fetchPatient);
    router.delete('/api/delete-patient/:id', patientController.deletePatient);
    router.put('/api/edit-patient', patientController.editPatient);

    return app.use('/', router);
}
export default initWebRouter;
