import pool from "../configs/connectDB.js";

const multer = require('multer');



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

    return res.render('editUser.ejs', { dataUser: user[0] });
}
let postEditUser = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body;
    console.log('check params:', firstName, lastName, email, address, id)
    await pool.execute('update user set firstName = ?, lastName = ?, email = ?, address = ? where id = ?', [firstName, lastName, email, address, id]);
    return res.redirect('/');
}
let getUploadImage = (req, res) => {
    return res.render('uploadImage.ejs');
}
let postUploadImage = async (req, res) => {
    // 'profile_pic' is the name of our file input field in the HTML form

    if (req.fileValidationError) {
        return res.send(req.fileValidationError);
    }
    else if (!req.file) {
        return res.send('Please select an image to upload');
    }
    // Display uploaded image for user validation
    res.send(`You have uploaded this image: <hr/><img src="/images/${req.file.filename}" width="500"><hr /><a href="./">Upload another image</a>`);
}
let handleUploadMultipleImage = (req, res) => {
    if (req.fileValidationError) {
        return res.send(req.fileValidationError);
    }
    else if (!req.files) {
        return res.send('Please select an image to upload');
    }
    const files = req.files;
    let index, len;

    // Loop through all the uploaded images and display them on frontend
    let result = "You have uploaded these images: <hr />";
    for (index = 0, len = files.length; index < len; ++index) {
        result += `<img src="/images/${files[index].filename}" width="300" style="margin-right: 20px;">`;
    }
    result += '<hr/><a href="./">Upload more images</a>';
    res.send(result);
}
module.exports = {
    getHomePage,
    getDetailPage,
    createNewUser,
    deleteUser,
    getEditUser,
    postEditUser,
    getUploadImage,
    postUploadImage,
    handleUploadMultipleImage
}