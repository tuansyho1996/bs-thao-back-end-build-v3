import pool from "../configs/connectDB.js";


let getHomePage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM user');
    return res.render('index.ejs', { dataUser: rows, test: 'test abc' });
}
let getDetailPage = async (req, res) => {
    let userId = req.params.id;
    const [user] = await pool.execute('SELECT * FROM user WHERE id = ?', [userId]);
    return res.send(JSON.stringify(user));
}
module.exports = {
    getHomePage,
    getDetailPage
}