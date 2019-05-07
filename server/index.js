const express = require('express');
const bodyParser = require('body-parser');
const api = express();

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({extended: false}));

api.use(require("./middleware/minio.js"));
api.use(require("./middleware/db.js"));

api.use("/auth", require('./route/auth.js'));
api.use("/doc", require('./route/doc.js'));
api.use("/user", require('./route/user.js'));


api.listen(process.env.PORT);