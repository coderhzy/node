const express = require("express");

const app = express();

// 静态资源服务器
app.use(express.static("./uploads"));

app.listen(8080);
