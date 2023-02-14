const express = require("express");

const app = express();

app.post("/login", (req, res) => {
  //   res.end("登录成功");
  //   res.send("登录成功");
  //   res.json({ name: "张三", age: 20, message: "登录成功" });
  res.status(200).json({ name: "张三", age: 20, message: "登录成功" });
});

app.listen(8080, () => {
  console.log("服务器启动成功");
});
