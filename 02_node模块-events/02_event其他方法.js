const EventEmitter = require("events");

const ee = new EventEmitter();

// 监听事件
ee.on("hello", () => {
  console.log("hello");
});
ee.on("nice", () => {
  console.log("nice");
});

// 1. 获取所有监听事件名称
const eventNames = ee.eventNames();
console.log("🚀 ~ file: 02_event其他方法.js:15 ~ eventNames", eventNames);

// 2. 获取监听器最大数量
const maxListeners = ee.getMaxListeners();
console.log("🚀 ~ file: 02_event其他方法.js:19 ~ maxListeners", maxListeners);

// 3. 获取某个事件监听器数量
const listenerCount = ee.listenerCount("hello");
console.log("🚀 ~ file: 02_event其他方法.js:23 ~ listenerCount", listenerCount);

// 4. 获取某个事件名称对应的监听器函数
const listeners = ee.listeners("hello");
console.log("🚀 ~ file: 02_event其他方法.js:27 ~ listeners", listeners);

// 1. 对事件监听一次
ee.once("once", () => {
  console.log("once");
});

ee.emit("once");
ee.emit("once");
ee.emit("once");
