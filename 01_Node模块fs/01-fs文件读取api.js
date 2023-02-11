const fs = require("fs");

// 1. 同步读取
const res = fs.readFileSync("./abc.txt", {
  encoding: "utf-8",
});
console.log(res);
console.log(res.toString());

// 2. 异步读取: 回调函数
fs.readFile(
  "./abc.txt",
  {
    encoding: "utf-8",
  },
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

// 3. 异步读取: promise
fs.promises
  .readFile("./abc.txt", {
    encoding: "utf-8",
  })
  .then((res) => {
    console.log(res.toString());
  })
  .catch((err) => {
    console.log(err);
  });
