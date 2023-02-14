const express = require("express");

const app = express();

app.post("/login", (req, res) => {
  res.send("post请求");
});

app.get("/home", (req, res) => {
  res.send("get请求");
});

app.listen(8080, () => {
  console.log("express服务器启动成功");
});
