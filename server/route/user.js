var app = require("express")
var user = app.Router();

// WARNING: only admin can add new user like scanner or accepter

user.post("/add",function(req,res){
    res.send("sun");
});

module.exports= user;