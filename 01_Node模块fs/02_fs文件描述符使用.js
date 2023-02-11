const fs = require("fs");

// 1. 打开文件
fs.open("./bbb.txt", (err, fd) => {
  if (err) throw err;

  // 1. 获取文件描述符
  console.log(fd);

  // 2. 读取文件信息
  fs.fstat(fd, (err, stats) => {
    if (err) throw err;
    console.log(stats);

    fs.close(fd, (err) => {
      if (err) throw err;
      console.log("文件关闭成功");
    });
  });
});
