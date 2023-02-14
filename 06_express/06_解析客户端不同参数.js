const express = require("express");

const app = express();

app.get("/home/list", (req, res) => {
  const queryInfo = req.query;
  console.log(queryInfo);
  res.end("data List 数据");
});

app.get("/users/:id/:name", (req, res) => {
  const { id, name } = req.params;
  console.log(id);
  res.end(`获取用户${(id, name)}的信息`);
});

app.listen(8080, () => {
  console.log("服务器启动成功");
});
