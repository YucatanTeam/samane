const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    database : process.env.DB_NAME,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS
});

function init() {
    connection.connect(function(err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
    
        console.log('connected as id ' + connection.threadId);
    });

    return connection;
}

function middleware(req, res, next) {
    req.sql = connection.query;
    req.sqlConnection = connection;
    next();
}

module.exports = { middleware, init, connection };

// req.sql : sql query
// req.sqlConnection : mysql connection object
