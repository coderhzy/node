const mysql = require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "example",
  database: "music",
});

// open the MySQL connection
connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

const statement = `INSERT INTO products SET ?;`;
const phoneJSON = require("./data.json");

phoneJSON.forEach((phone) => {
  connection.query(statement, phone, (err, results, fields) => {
    if (err) {
      console.log(err);
    }
    console.log("写入成功");
  });
});
