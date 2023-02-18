const Koa = require("koa");
const KoaRouter = require("@koa/router");
const jwt = require("jsonwebtoken");
const fs = require("fs");

const app = new Koa();

const userRouter = new KoaRouter({ prefix: "/user" });

const privateKey = fs.readFileSync("./private.key");
const publicKey = fs.readFileSync("./public.key");

userRouter.get("/login", async (ctx) => {
  // 1. 颁发tokens
  const payload = { name: "nice" };
  const token = jwt.sign(payload, privateKey, {
    expiresIn: 60,
    algorithm: "RS256",
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
    const result = jwt.verify(token, publicKey, {
      algorithms: ["RS256"],
    });
    if (result.name == "nice") {
      ctx.body = {
        code: 1001,
        message: "用户信息",
      };
      return;
    }
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
