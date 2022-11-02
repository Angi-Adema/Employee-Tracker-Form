const mysql = require('mysql2');

//DO I NEED TO HAVE THE PORT ABOVE OR LISTED IN THE CONNECTION FUNCTION BELOW???
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
