const Koa = require("koa");
const KoaRouter = require("@koa/router");
const koaSession = require("koa-session");

const app = new Koa();

const userRouter = new KoaRouter({ prefix: "/user" });

const session = koaSession(
  {
    key: "sessionid",
    signed: true,
  },
  app
);

// 加盐
app.keys = ["salt"];

app.use(session);

userRouter.get("/login", async (ctx) => {
  ctx.session.single = "nice";
  // 设置cookie
  //   ctx.cookies.set("single", "nice", {
  //     maxAge: 1000 * 60 * 60 * 24,
  //   });

  ctx.body = "登录成功";
});

userRouter.get("/info", async (ctx) => {
  //   const cookie = ctx.cookies.get("single");

  const cookie = ctx.session.single;
  console.log(
    "🚀 ~ file: 01_服务器设置cookie.js:28 ~ userRouter.get ~ value",
    cookie
  );

  if (cookie !== "nice") {
    ctx.body = "请先登录";
    return;
  }
  ctx.body = "用户信息";
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(8000, () => {
  console.log("服务器启动成功");
});
