var app = require("express")
var user = app.Router();

//routes will be here

user.post("/add",function(req,res){
    res.send("sun");
});

module.exports= user;