const Koa = require("koa");
const KoaRouter = require("@koa/router");
const bodyParser = require("koa-bodyparser"); // 解析body数据
const multer = require("@koa/multer"); // 解析form-data数据

const app = new Koa();

const userRouter = new KoaRouter({ prefix: "/users" });

app.use(bodyParser());
const formParser = multer();

// 1. get - params
// 2. get - query
// 3. post - json
// 4. post - form-data
// 5. post - x-www-form-urlencoded
userRouter.get("/:id", (ctx, next) => {
  const id = ctx.params.id;
  ctx.body = `user list data~${id}`;
});

userRouter.get("/", (ctx, next) => {
  const query = ctx.query;
  ctx.body = `user list data~${JSON.stringify(query)}`;
});

userRouter.post("/json", (ctx, next) => {
  const body = ctx.request.body;
  ctx.body = `user list data~${JSON.stringify(body)}`;
});

userRouter.post("/form-data", formParser.any(), (ctx, next) => {
  const body = ctx.request.body;
  ctx.body = `user list data~${JSON.stringify(body)}`;
});

userRouter.post("/x-www-form-urlencoded", (ctx, next) => {
  console.log(ctx.request.body);
  ctx.body = "用户的urlencoded数据";
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());
app.listen(8080, () => {
  console.log("服务器启动成功");
});
