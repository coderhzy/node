const fs = require("fs");

fs.mkdir("./hzy", (err) => {
  if (err) throw err;
  console.log("文件夹创建成功");
});
