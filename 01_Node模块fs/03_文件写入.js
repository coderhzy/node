const fs = require("fs");

const content = "hello world";

// 写入文件
fs.writeFile("./ccc.txt", content, { flag: "w", encoding: "utf-8" }, (err) => {
  if (err) throw err;
  console.log("文件写入成功");
});

fs.readFile(
  "./ccc.txt",
  {
    encoding: "utf-8",
  },
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);
