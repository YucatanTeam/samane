var app = require("express")
var doc = app.Router();

//router will be set here

doc.post("/doc/add",function(req,res){
    res.send("sun");
});
module.exports= doc;