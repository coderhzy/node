const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const multer = require("multer");

const app = express();

const writeStream = fs.createWriteStream("./logs/access.log");
app.use(morgan("combined", { stream: writeStream }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/login", (req, res) => {
  console.log(req.body);
  res.send("登录成功");
});

const upload = multer({
  //   dest: "./uploads",
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

app.post("/avatar", upload.single("avatar"), (req, res) => {
  console.log(req.file);
  res.send("上传成功");
});

app.listen(8080, () => {
  console.log("服务器启动成功");
});
