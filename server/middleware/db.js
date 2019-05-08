const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

module.exports = function middleware(req, res, next) {
    req.sql = connection.query;
    req.sqlConnection = connection;
    next();
}

// req.sql : sql query
// req.sqlConnection : mysql connection object
