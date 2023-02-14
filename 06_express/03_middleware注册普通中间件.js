const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("中间件 middleware");
  next();
});

app.use((req, res, next) => {
  console.log("中间件 middleware 2");
  next();
});

app.get(
  "/index",
  (req, res, next) => {
    console.log("index");
    next();
  },
  (req, res, next) => {
    console.log("index 2");
    next();
  },
  (req, res, next) => {
    console.log("index 3");
    res.end("index");
  }
);

app.use("/home", (req, res, next) => {
  console.log("中间件 middleware 3");
  res.end("home");
});

app.listen(8080, () => {
  console.log("服务器启动成功");
});
