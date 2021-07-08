// 需求：希望有一个服务，可以根据请求的接口内容返回响应的数据

import express from "express";
import { DataStore } from "./data";

console.log(DataStore.list);

const app = express();

app.get("/", (req, res) => {
  // res.end("123");
  res.json(DataStore.list);
});

app.listen(8080, () => {
  console.log("服务开启在8080");
});
