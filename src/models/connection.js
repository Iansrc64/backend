const mysql = require('mysql2')

const connection = mysql;mysql.createPool({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
}) // usando process.env para puxar informações do arquivo .env

module.exports = connection