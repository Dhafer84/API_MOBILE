const mysql = require("mysql2");

const conn = mysql.createConnection({
    database: 'pidev_1cinf2',
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: ''
});

module.exports = conn;