'use strict';
const mysql2 = require('mysql2');

const dbConn = mysql2.createConnection({
 host     : 'localhost',
 user     : 'root',
 password : 'Password@2208',
 database : 'newdb'
});

dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports.dbConn = dbConn;


