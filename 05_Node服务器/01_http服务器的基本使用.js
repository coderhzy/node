const http = require("http");
const url = require("url");
const { URLSearchParams } = require("url");

const server = http.createServer((req, res) => {
  console.log("有人访问了服务器");

  // 1. 客户端传入query参数
  if (req.url === "/" && req.method === "GET") {
    const urlSting = req.url;
    const urlInfo = url.parse(urlSting);
    console.log(
      "🚀 ~ file: 01_http服务器的基本使用.js:10 ~ server ~ urlInfo",
      urlInfo
    );

    // 2. 解析请求体
    const queryString = urlInfo.query;
    const queryInfo = new URLSearchParams(queryString);
    console.log(
      "🚀 ~ file: 01_http服务器的基本使用.js:18 ~ server ~ queryInfo",
      queryInfo
    );
    console.log(queryInfo.get("name"));
  }

  // 3. 获取body参数
  if (req.url === "/login" && req.method === "POST") {
    let isLogin = false;
    req.on("data", (data) => {
      const dataString = data;
      const loginInfo = JSON.parse(dataString);
      const { username, password } = loginInfo;
      if (username === "hzy" && password === "123") {
        isLogin = true;
      } else {
        isLogin = false;
      }
    });

    req.on("end", () => {
      if (isLogin) {
        res.end("登录成功");
      } else {
        res.end("登录失败");
      }
    });
  }

  // 4. 查看请求头
  if (req.url === "/register" && req.method === "GET") {
    console.log(req.headers);
    res.end(req.headers["content-type"]);
  }
});

// 最大端口: 256 * 256 = 65536
server.listen(8080, () => {
  console.log("服务器启动成功,端口为8080");
});
