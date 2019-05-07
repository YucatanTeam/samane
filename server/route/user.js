var app = require("express")
var user = app.Router();

//routes will be here

user.post("/usr/add",function(req,res){
    res.send("sun");
});

module.exports={doc};