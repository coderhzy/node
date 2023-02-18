const Koa = require("koa");
const KoaRouter = require("@koa/router");
const jwt = require("jsonwebtoken");

const app = new Koa();

const userRouter = new KoaRouter({ prefix: "/user" });

const secretKey = "salt";

userRouter.get("/login", async (ctx) => {
  // 1. 颁发tokens
  const token = jwt.sign({ name: "nice" }, secretKey, {
    expiresIn: 60,
  });

  ctx.body = {
    code: 1000,
    token,
    message: "登录成功",
  };
});

userRouter.get("/info", async (ctx) => {
  // 1. 获取token
  const authorization = ctx.headers.authorization;
  const token = authorization.replace("Bearer ", "");
  console.log(token);

  // 2. 验证token
  try {
    const result = jwt.verify(token, secretKey);
    ctx.body = "用户信息";
  } catch (error) {
    ctx.body = {
      code: 1001,
      message: "登录失效",
    };
    return;
  }
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(8000, () => {
  console.log("服务器启动成功");
});
