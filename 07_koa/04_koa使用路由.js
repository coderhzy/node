const Koa = require("koa");
const KoaRouter = require("@koa/router");

const app = new Koa();

const router = new KoaRouter({ prefix: "/users" });

router.get("/", (ctx, next) => {
  ctx.body = "用户列表";
});

router.post("/:id", (ctx, next) => {
  const id = ctx.params.id;
  ctx.body = `${id}用户id`;
});

router.delete("/:id", (ctx, next) => {
  const id = ctx.params.id;
  ctx.body = `删除了${id}用户id`;
});

router.patch("/:id", (ctx, next) => {
  const id = ctx.params.id;
  ctx.body = `修改了${id}用户id`;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8080, () => {
  console.log("服务器启动成功");
});
