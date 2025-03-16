import mysql from 'mysql2'
import dotenv from 'dotenv';
dotenv.config();

// const db = mysql.createConnection({
const db = mysql.createPool({
    // host: "localhost", 
    // user: "root", 
    // password: "", 
    // database: "database_pertama"
    host: process.env.DATABASE_HOST, 
    user: process.env.DATABASE_USER, 
    password: process.env.DATABASE_PASSWORD, 
    database: process.env.DATABASE_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})


// authenticationPlugins: { 'mysql_native_password': () => require('mysql2/lib/auth_plugins/native_password') }

//TITIPAN DARI GEMINI.AI
// async function getdata(){
//     const [rows, fields] = await pool.query('SELECT * FROM tabel');
//     return rows;
// }

// getdata().then((data)=>{
//     console.log(data);
// });


// module.exports = db;
export {db}


