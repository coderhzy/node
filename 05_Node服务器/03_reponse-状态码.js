const http = require("http");

const server = http.createServer((req, res) => {
  console.log("有人访问了服务器");

  // 1. 设置返回状态码
  // res.statusCode = 404;

  // 2. 设置返回状态码
  //   res.writeHead(200);

  // 3. 设置header
  //   res.setHeader("Content-Type", "application/json;charset=utf-8");

  res.writeHead(200, {
    "Content-Type": "application/json;charset=utf-8",
  });

  const list = [
    {
      name: "hzy",
      age: 18,
    },
    {
      name: "kobe",
      age: 20,
    },
  ];
  res.end(JSON.stringify(list));
});

server.listen(8080, () => {
  console.log("服务器启动成功,端口为8080");
});
