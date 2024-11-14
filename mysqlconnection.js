// Import the mysql2 package
const mysql = require('mysql2');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
    host: 'localhost',      // Replace with your database host
    user: 'root',           // Replace with your MySQL username
    password: '',           // Replace with your MySQL password
    database: 'penjualan'  // Replace with your database name
});

// Connect to the MySQL server
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        return;
    }
    console.log('Connected to MySQL!');

    // Close the connection after checking
    connection.end();
});