const fs = require("fs");

// 1. 一次性写入
const content = "hello world";
fs.writeFile(
  "./bbb.txt",
  content,
  {
    encoding: "utf-8",
    flag: "a",
  },
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);

// 2. 创建一个可写流
const writeStream = fs.createWriteStream("./ccc.txt", {
  encoding: "utf-8",
  flag: "a+",
});

writeStream.write("nice", (err) => {
  if (err) throw err;
});
writeStream.write(" to meet you", (err) => {
  if (err) throw err;
});

writeStream.on("close", () => {
  console.log("file be close");
});

// writeStream.close();

writeStream.end("end");
