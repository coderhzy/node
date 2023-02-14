const express = require("express");

const app = express();

// 中间件
// 1. 中间件就是一个函数
// 2. 中间件的作用：扩展express的功能
// 3. 使用中间件：app.use(中间件函数)
// 4. 中间件的分类：
//    4.1 内置中间件：express内置的中间件
//    4.2 第三方中间件：需要下载的中间件
//    4.3 自定义中间件：自己写的中间件

app.post("/login", (req, res, next) => {
  // 中间件中任意修改代码, 会影响后面的代码
  req.age = 99;

  // 可以在中间件中结束响应周期
  //   res.json({
  //     name: "张三",
  //     age: req.age,
  //   });

  // 执行下一中间件
  next();
});

app.use((req, res, next) => {
  console.log("中间件1");
});

app.listen(8080, () => {
  console.log("express服务器启动成功");
});
