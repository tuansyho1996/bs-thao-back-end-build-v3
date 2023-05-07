import express from "express";
import homeController from "../controller/homeController.js";

let router = express.Router();


const initWebRouter = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/detail/user/:id', homeController.getDetailPage);
    router.get('/edit-user/:id', homeController.getEditUser);
    router.post('/create-new-user', homeController.createNewUser);
    router.post('/delete-user', homeController.deleteUser);
    router.post('/edit-user', homeController.postEditUser);
    return app.use('/', router);
}
export default initWebRouter;
