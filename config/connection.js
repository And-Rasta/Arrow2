// Import MySQL
const mysql = require('mysql2');

//Read and set any environment variables with the dotenv package.
require("dotenv").config();

// Configure connection using JAWSDB
var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        database: 'auvyz874nlafn8eq',
        user: 'root',
        password: 'root',
    });
}
// Set connection
connection.connect((err) => {
    if (err) throw err;
    console.log('Connection established at: ' + connection.threadId);
});

module.exports = connection;