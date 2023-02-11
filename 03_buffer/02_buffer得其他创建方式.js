const fs = require("fs");

// 1. 创建内存中的buffer
const buf = Buffer.alloc(8);
console.log("🚀 ~ file: 02_buffer得其他创建方式.js:4 ~ buf", buf);

// 2. 手动对每个字节访问
console.log("🚀 ~ file: 02_buffer得其他创建方式.js:7 ~ buf[0]", buf[0]);

// 3. 手动操作每个字节操作
buf[0] = 0x61;
buf[1] = 0x62;
buf[2] = 100;
console.log("🚀 ~ file: 02_buffer得其他创建方式.js:11 ~ buf", buf);

buf[3] = "m".charCodeAt();
console.log("🚀 ~ file: 02_buffer得其他创建方式.js:14 ~ buf", buf);
