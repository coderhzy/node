const Koa = require("koa");
const Router = require("@koa/router");
const fs = require("fs");

const app = new Koa();

const userRouter = new Router({ prefix: "/users" });

userRouter.get("/", (ctx, next) => {
  const isAuth = false;
  // 1.
  //   ctx.body = "用户列表";
  // 2.
  //   ctx.body = Buffer.from("你好呀");
  // 3.
  //   const readStream = fs.createReadStream("./uploads/05.webp");
  //   ctx.type = "image/webp";
  //   ctx.body = readStream;
  // 4.
  //   ctx.body = {
  //     code: 0,
  //     data: [
  //       {
  //         name: "张三",
  //         age: 20,
  //         price: 200,
  //       },
  //       {
  //         name: "李四",
  //         age: 21,
  //         price: 300,
  //       },
  //     ],
  //   };
  // 5.
  //   ctx.body = null; // 204
  // 6. 处理错误
  ctx.app.emit("error", -1000, ctx);
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

// 处理错误
app.on("error", (code, ctx) => {
  console.log(code);
  const errorCode = code;
  let message = "";
  switch (errorCode) {
    case -1000:
      message = "服务器错误";
      break;
    default:
      message = "未知错误";
      break;
  }

  const body = {
    code: errorCode,
    message,
  };

  ctx.body = body;
});

app.listen(8080, () => {
  console.log("服务器启动成功");
});
