const fs = require("fs");

// 1. 读取文件夹
// 获取文件夹中对应的字符串数组
// fs.readdir("./hzy", (err, files) => {
//   console.log(files);
// });

// 2. 读取文件夹 并获取文件夹中的文件信息
// fs.readdir("./hzy", { withFileTypes: true }, (err, files) => {
//   files.forEach((item) => {
//     if (item.isDirectory()) {
//       console.log("文件夹", item.name);
//       fs.readdir(
//         "./hzy/" + item.name,
//         { withFileTypes: true },
//         (err, files) => {
//           files.forEach((item) => {
//             if (item.isFile()) {
//               console.log("文件", item.name);
//             }
//           });
//         }
//       );
//     } else {
//       console.log("文件", item.name);
//     }
//   });
// });

// 3. 递归读取文件夹
function readDirectory(path) {
  fs.readdir(path, { withFileTypes: true }, (err, files) => {
    files.forEach((item) => {
      if (item.isDirectory()) {
        console.log("文件夹", item.name);
        readDirectory(`${path}/${item.name}`);
      } else {
        console.log("文件", item.name);
      }
    });
  });
}

readDirectory("./hzy");
