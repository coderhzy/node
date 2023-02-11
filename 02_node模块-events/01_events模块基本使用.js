const EventEmitter = require("events");

const emitter = new EventEmitter();

function handleFn(...args) {
  console.log("listener", args);
}

// 监听事件
emitter.on("listener", handleFn);

// 发射时间
emitter.emit("listener", 18, 20);

emitter.off("listener", handleFn);

emitter.emit("listener", "react");
