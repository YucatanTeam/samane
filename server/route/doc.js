var app = require("express")
var doc = app.Router();

//router will be set here

doc.get("/all",function(req,res){
    res.send(`access granted for ${req.user.username} to all docs`);
});
doc.post("/doc/add",function(req,res){
    var re
});
doc.post("/more/:id/edit",function(req,res){
    var body = JSON.stringify(req.body)
    var moreAll = req.sql.query("SELECT * FROM doc WHERE id=? ", [req.params.id],function(err,doc){
        try {
            console.log(doc)
            res.send("200");
        } catch (err) {
            res.send(err)
        }
      
    })
    
    
});

module.exports= doc;