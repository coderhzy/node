const express = require("express");

const app = express();
app.use(express.json());

const userRouter = express.Router();
userRouter.get("/:id", (req, res) => {
  res.send("用户登录");
});

userRouter.post("/login", (req, res) => {
  console.log(req.body);
  res.end("登录成功");
});

userRouter.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  res.send("删除某个用户" + id);
});

userRouter.patch("/:id", (req, res, next) => {
  const { id } = req.params;
  res.send("修改某个用户" + id);
});

app.use("/users", userRouter);

app.listen(8080, () => {
  console.log("服务器启动成功");
});
