const express = require("express")
const minio = express.Router()

minio.post('/add', (req, res)=>{
    res.send("new minio object added successfully")
})

module.exports = minio
