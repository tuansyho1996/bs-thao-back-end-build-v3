import connection from "../configs/connectDB.js";

let getHomePage = (req, res) => {
    connection.query(
        'SELECT * FROM user',
        function (err, results, fields) {
            console.log(results); // results contains rows returned by server
            let data = results;
            return res.render('index.ejs', { dataUser: JSON.stringify(data) });
        }
    );
}
module.exports = {
    getHomePage
}