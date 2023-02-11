const http = require("http");

const server = http.createServer((req, res) => {
  console.log("有人访问了服务器");
  res.write("hello word1");
  res.write("hello word");
  res.end("本次写出结束"); // 必须用end方法结束响应
});

server.listen(8080, () => {
  console.log("服务器启动成功,端口为8080");
});
