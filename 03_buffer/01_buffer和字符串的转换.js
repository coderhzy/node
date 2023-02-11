const fs = require("fs");

// 1. 创建buffer
const buf1 = Buffer.from("hello world");
console.log("🚀 ~ file: 01_buffer和字符串的转换.js:3 ~ buf1", buf1);

// 2. 创建中文buffer
const buf2 = Buffer.from("你好呀");
console.log("🚀 ~ file: 01_buffer和字符串的转换.js:6 ~ buf2", buf2);

// 3. 创建Buffer包含中英文
const buf3 = Buffer.from("你好呀hello world");
console.log("🚀 ~ file: 01_buffer和字符串的转换.js:9 ~ buf3", buf3);
console.log(buf3.toString());

// 4. 手动指定编码
const buf4 = Buffer.from("你好呀hello world", "utf16le");
const buf4Decode = buf4.toString("utf16le");
console.log(
  "🚀 ~ file: 01_buffer和字符串的转换.js:19 ~ buf4Decode",
  buf4Decode
);
console.log("🚀 ~ file: 01_buffer和字符串的转换.js:16 ~ buf4", buf4);
