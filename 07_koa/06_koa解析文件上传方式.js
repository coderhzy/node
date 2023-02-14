const Koa = require("koa");
const KoaRouter = require("@koa/router");
const bodyParser = require("koa-bodyparser"); // 解析body数据
const multer = require("@koa/multer"); // 解析form-data数据

const app = new Koa();

const uploadRouter = new KoaRouter({ prefix: "/upload" });

app.use(bodyParser());
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

uploadRouter.post("/avatar", upload.single("avatar"), (ctx, next) => {
  console.log(ctx.request.file);
  ctx.body = "上传头像成功";
});

uploadRouter.post("/photos", upload.array("photos", 12), (ctx, next) => {
  console.log(ctx.request.files);
  ctx.body = "文件上传成功";
});

app.use(uploadRouter.routes());
app.use(uploadRouter.allowedMethods());
app.listen(8080, () => {
  console.log("服务器启动成功");
});
