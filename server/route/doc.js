const app = require("express")
const doc = app.Router();
const access = require("./../middleware/access")


doc.get("/all", access(["doc_get"]) , (req,res)=>{

    req.sql.query("SELECT * FROM doc", (err, docs)=>{
        if(err) return res.json({body: null, err:err})
        return res.json({body:docs, err:null})
    })

});


module.exports = doc;