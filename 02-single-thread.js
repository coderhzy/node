const http = require('http');

function sleepTime(time) {
    const sleep = Date.now() + time * 1000;
    while (Date.now() < sleep) {}
    return
}
sleepTime(4)

const server = http.createServer((req, res) => {
    res.end('start .......')
})

server.listen(8080, () => {
    console.log(`服务已经启动`);
})