const Koa = require("koa");

const app = new Koa();

// 注册中间件
app.use((ctx, next) => {
  console.log("中间件1");
  ctx.body = "hello world";
});

app.listen(8080, () => {
  console.log("服务器启动成功");
});
