const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'user',
  database: 'db',
  password: 'password',
});

module.exports = pool.promise();