const express = require('express');
const bodyParser = require('body-parser');
const api = express();


api.use(bodyParser.json());
api.use(bodyParser.urlencoded({extended: false}));


const sqlConnection = require("./middleware/db.js").init();
require("./middleware/passport").init({api, sql: sqlConnection.query});

api.use(require("./middleware/api.js"));
api.use(require("./middleware/minio.js"));
api.use(require("./middleware/db.js").middleware);
api.use(require("./middleware/passport.js").middleware);


api.use("/auth", require('./route/auth.js'));
// api.use("/doc", require('./route/doc.js'));
// api.use("/user", require('./route/user.js'));


api.listen(process.env.PORT);