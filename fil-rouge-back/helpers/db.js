const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Orient-29",
  database: "my_db",
});
module.exports = connection;
