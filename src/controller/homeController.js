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
    let { firstName, lastName, email, address } = req.body;
    await pool.execute('INSERT INTO user (firstName, lastName, email, address) values (?, ?, ?, ?)', [firstName, lastName, email, address]);
    return res.redirect('/');
}
let deleteUser = async (req, res) => {
    let userId = req.body.id;
    await pool.execute('delete from user where id = ?', [userId]);
    return res.redirect('/');
}
let getEditUser = async (req, res) => {
    let userId = req.params.id;
    const [user] = await pool.execute('SELECT * FROM user WHERE id = ?', [userId]);

    res.render('editUser.ejs', { dataUser: user[0] });
}
let postEditUser = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body;
    console.log('check params:', firstName, lastName, email, address, id)
    await pool.execute('update user set firstName = ?, lastName = ?, email = ?, address = ? where id = ?', [firstName, lastName, email, address, id]);
    return res.redirect('/');
}
module.exports = {
    getHomePage,
    getDetailPage,
    createNewUser,
    deleteUser,
    getEditUser,
    postEditUser
}