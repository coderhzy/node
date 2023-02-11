const fs = require("fs");

// 1. 一次性读取 一次性写入
fs.readFile("./foo.txt", (err, data) => {
  console.log(data);
  fs.writeFile("./foo_copy.txt", data, () => {
    console.log("写入文件完成");
  });
});

// 2. 创建一个可读流 创建一个可写流
const readStream = fs.createReadStream("./foo.txt");
const writeStream = fs.createWriteStream("./foo_copy03.txt");

// readStream.on("data", (data) => {
//   console.log("data");
//   writeStream.write(data);
// });

// readStream.on("end", () => {
//   console.log("end");
// });

// 3. 在可读流和可写流之间创建一个管道
// 将可读流数据放到可写流中
readStream.pipe(writeStream);
