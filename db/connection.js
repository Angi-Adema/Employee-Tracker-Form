const mysql = require('mysql2');

// Connect to database.
const connection = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: '',
        database: 'employee_tracker_db'
    },
);

module.exports = connection;
