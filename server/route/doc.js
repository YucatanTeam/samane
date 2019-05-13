var app = require("express")
var doc = app.Router();

//router will be set here

doc.get("/all",function(req,res){
    res.send(`access granted for ${req.user.username} to all docs`);
});
module.exports= doc;