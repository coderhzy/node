const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3333,
  database: "music",
  user: "root",
  password: "example",
});

// 执行预处理语句
const statement = `SELECT * FROM products WHERE price > ? AND score > ?;`;
connection.execute(statement, [990, 8], (err, value) => {
  if (err) {
    console.log("查询失败", err);
    return;
  }

  // 查看结果
  console.log("查询成功", value);
});
