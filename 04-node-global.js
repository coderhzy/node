// console.log(global);

// 返回正在执行脚本的绝对路径
console.log(__filename);
// 不包含完整的路径
console.log(__dirname);

// 默认情况下，this 是空对象，和 global 并不是一样的
// console.log(this);

// false
console.log(global === this);

// true
(function name() {
    console.log(this === global);
})()