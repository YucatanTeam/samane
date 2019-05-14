const express = require("express")
const access = express.Router()

// WARNING : only admin can modify an access for its user

access.get("/all", (req, res)=>{
    res.send("list of all available accesses")
})

module.exports = access