import mysql from 'mysql2'

const db = mysql.createConnection({
    host: "localhost", 
    user: "root", 
    password: "", 
    database: "database_pertama"
})

// module.exports = db;
export {db}


