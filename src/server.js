import express from "express";
import configViewEngine from "./configs/viewEngines";
const app = express()
const port = 3000

configViewEngine(app);
app.get('/', (req, res) => {
    res.render('index.ejs')
})
app.get('/about', (req, res) => {
    res.send('hello tuan')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})