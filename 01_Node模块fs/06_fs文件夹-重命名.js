const fs = require("fs");

// 1. 重命名文件夹
// fs.rename("./hzy", "./hzyrename", (err) => {
//   if (err) throw err;
//   console.log("文件夹重命名成功");
// });

// 2. 重命名文件
fs.rename("./ccc.txt", "./ddd.txt", (err) => {
  if (err) throw err;
  console.log("文件重命名成功");
});
