const express = require('express');
const auth = express.Router();


auth.post("/login", (req, res) => {
    res.send('ok');
})

module.exports = { auth };