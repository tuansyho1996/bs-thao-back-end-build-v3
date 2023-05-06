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
let createNewUser = async (req, res) => {
    console.log('check req.body : ', req.body);
    let { firstName, lastName, email, address } = req.body;
    console.log('check params:', firstName, lastName, email, address);
    await pool.execute('INSERT INTO user (firstName, lastName, email, address) values (?, ?, ?, ?)', [firstName, lastName, email, address]);
    return res.redirect('/');
}
module.exports = {
    getHomePage,
    getDetailPage,
    createNewUser
}