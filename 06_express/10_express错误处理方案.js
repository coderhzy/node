const express = require("express");

const app = express();

app.use(express.json());

app.post("/login", (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) next(1002);

  if (username !== "admin" || password !== "123456") next(1001);

  if (username === "admin" && password === "123456") res.send("登录成功");
});

app.use((err, req, res, next) => {
  const code = err;
  console.log("🚀 ~ file: 10_express错误处理方案.js:19 ~ app.use ~ code", code);

  let message = "未知错误";
  switch (code) {
    case 1001:
      message = "用户名或密码错误";
      break;
    case 1002:
      message = "用户名或密码不能为空";
      break;
    default:
      break;
  }

  res.json({ code, message });
});

app.listen(8080, () => {
  console.log("http://localhost:8080");
});
