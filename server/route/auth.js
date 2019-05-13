const express = require('express');
const auth = express.Router();
const passport = require("passport");

auth.post("/login", passport.authenticate('local', { 
                    successRedirect: '/doc/all',
                    failureRedirect: '/auth/login' }), (req, res) => {
})

auth.post("/signup", (req, res)=>{
 req.sql.query("SELECT * FROM user WHERE username = ?", [req.body.username], (err, user) => {
     if (err)
         return res.send(err)
     if (user.length) {
         return res.send("user exists!")
     } else {
         req.hash(req.body.password, (err, saltdk) => {
             req.sql.query("INSERT INTO user ( username, password ) values ( ?, ? )", [req.body.username, saltdk], function (err, rows) {
                 req.sql.query("SELECT * FROM user WHERE username = ?", [req.body.username], (err, user) => {
                    return res.send(`user ${user[0].username} added`);
                 })
            }) 
         });
      }
  });
})

auth.get("/login", (req,res)=>{
    return res.send("please get login!")
})

auth.get("/logout", (req, res) => {
    req.logout()
    return res.send("successfully loggedOut")
})

module.exports = auth;