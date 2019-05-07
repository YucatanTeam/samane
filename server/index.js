const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require("cookie-session");
const helmet = require('helmet');
const api = express();


// CORS setup
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, x-access-token')
    if (req.method === 'OPTIONS') {
      res.sendStatus(200)
    }
    else {
      next()
    }
})

app.use(helmet())
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({extended: false}));
app.use(cookieSession({
    name: "session",
    keys: [
        process.env.SECRET || require('crypto').randomBytes(32).hexSlice()
    ],
    maxAge: 1 * 60 * 60 * 1000, // 24 hrs
}));


api.use(require("./middleware/minio.js"));
api.use(require("./middleware/db.js"));

api.use("/auth", require('./route/auth.js'));
// api.use("/doc", require('./route/doc.js'));
// api.use("/user", require('./route/user.js'));


api.listen(process.env.PORT);