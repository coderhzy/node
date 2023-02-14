const Koa = require("koa");

const app = new Koa();

app.use((ctx, next) => {
  // console.log(ctx.request); // koa封装的req对象
  // console.log(ctx.req); // node封装的的req对象

  // console.log(ctx.response); // koa封装的res对象
  // console.log(ctx.res); // node封装的的res对象

  console.log(ctx.query);
  const { name } = ctx.query;
  console.log("🚀 ~ file: 02_koa中ctx参数解析.js:14 ~ app.use ~ name", name);
});

app.listen(8080, () => {
  console.log("服务器启动成功");
});
