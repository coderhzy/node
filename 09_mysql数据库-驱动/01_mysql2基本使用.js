const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3333,
  database: "music",
  user: "root",
  password: "example",
});

connection.connect((err) => {
  if (err) throw err;

  console.log("数据库连接成功!");
});

const statement = "SELECT * FROM `students`;";

connection.query(statement, (err, value, fields) => {
  if (err) {
    console.log("查询失败", err);
    return;
  }

  // 查看结果
  console.log("查询成功", value);
});
