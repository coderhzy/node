// 1. 资源： cpu 内存

// 缓冲区大小
// Buffer.alloc(10001)
// console.log(process.memoryUsage());

// console.log(process.cpuUsage());


// 2. 运行环境: 运行目录、node环境、cpu架构、用户环境、系统平台


// 运行目录
console.log(process.cwd());

// node环境
console.log(process.version);
console.log(process.versions);

// cpu架构
console.log(process.arch);
console.log(process.env);
console.log(process.env.PATH);

// win
console.log(process.env.USERPROFILE);
// mac
console.log(process.env.HOME);

// 平台
console.log(process.platform);

// 3. 运行状态： 启动个参数、PID、运行时间

// 【noe启动程序对应路径，当前执行文件的路径，额外加的操作】
console.log(process.argv);
console.log(process.argv[0]);

// PID:执行的在系统中对应的ID
console.log(process.pid);
// 返回当前进程的父进程的 PID
console.log(process.ppid);

// 这个文件的执行时间
console.log(process.uptime());
// setTimeout(() => {
//     console.log(process.uptime());
// }, 3000)


// 4. 事件
// process.on('beforeExit', (code) => {
//     console.log('before exit' + code);
//     // 里面只能写异步代码
// })

// process.on('exit', (code) => {
//     console.log('exit ' + code);
//     // 里面只能写同步代码
// })

// console.log('代码执行完了');

// process.exit()

// 5. 标准输出 输入 错误
// 管道 流的操作
// console.log = function (data) {
//     process.stdout.write('------' + data + "\n")
// }
// console.log(11);
// console.log(22);

// 读取文件
// const fs = require('fs');

// // 拿到数据，流给下一个人
// fs.createReadStream('test.txt')
//     .pipe(process.stdout)

// // 输入 输出
// process.stdin.pipe(process.stdout);

process.stdin.setEncoding('utf-8')
process.stdin.on('readable', () => {
    let chunk = process.stdin.read()
    if (chunk != null) {
        process.stdout.write('data ' + chunk)
    }
})