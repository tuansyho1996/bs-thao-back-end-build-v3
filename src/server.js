import express from "express";
import configViewEngine from "./configs/viewEngines.js";
import initWebRouter from "./route/web.js"

require('dotenv').config();


const app = express()
const port = process.env.PORT;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

configViewEngine(app);
initWebRouter(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})