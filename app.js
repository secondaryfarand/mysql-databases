import express from 'express'
const app = express()
const port = 3000

import {db} from "./connection.js"
// import db from "./connection.js"
import {response} from "./response.js"

import dotenv from 'dotenv';
dotenv.config();


app.get('/', (req, res) => {
  const selectAllData = "SELECT * FROM mahasiswa" 
  db.query(selectAllData, (err, result) => {
    // hasil dari  my sql
    if (err) {
        console.error(err);
        res.status(500).send('Terjadi kesalahan saat mengambil data');
        return;
      }
      console.log(result)
      response(200, result, "Get All Data", res)
  })  
})

app.get('/find', (req, res) => {
    const selectData = `SELECT nama_lengkap FROM mahasiswa WHERE nim  = ${req.query.nim}` 

    console.log('Find NIM : ', req.query.nim)
    db.query(selectData, (err, result) => { 
      // hasil dari  my sql
      if (err) {
          console.error(err);
          res.status(500).send('Terjadi kesalahan saat mengambil data')
          return;
        }
        console.log(result)
        response(200, result, "Find Mahasiswa Name", res)
    })  
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})