const fs = require("fs");

const readStream = fs.createReadStream("./aaa.txt", {
  start: 8,
  end: 15,
  highWaterMark: 3, // 决定每次读取多少字节,导致回调函数执行的次数
});

readStream.on("data", (data) => {
  console.log(data.toString());
});

// 3. 补充其他的事件监听
readStream.on("open", (fd) => {
  console.log("open", fd);
});

readStream.on("end", () => {
  console.log("end");
});

readStream.on("close", () => {
  console.log("close");
});
