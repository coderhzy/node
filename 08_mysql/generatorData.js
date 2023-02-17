const fs = require("fs");
const { faker } = require("@faker-js/faker");

const generatorData = () => {
  const brand = faker.commerce.productName();
  const title = faker.commerce.productName();
  const price = faker.commerce.price();
  const score = faker.random.numeric(2);
  const voteCnt = faker.random.numeric(3);
  const url = faker.image.imageUrl();
  const pid = faker.random.numeric(6);

  return Object.assign({}, { brand, title, price, score, voteCnt, url, pid });
};

const arr = [];

const coverFormatter = (arr) => {
  arr.forEach((phone) => {
    for (let key in phone) {
      if (
        key === "brand" ||
        key === "url" ||
        key === "brand" ||
        key === "title"
      ) {
        phone[key] = phone[key];
      } else {
        phone[key] = Number(phone[key]);
      }
    }
  });

  return arr;
};

new Promise((resolve, reject) => {
  for (let i = 0; i < 1000; i++) {
    arr.push(generatorData());
  }
  // 格式化
  const formatterArr = coverFormatter(arr);
  resolve(formatterArr);
}).then((formatterArr) => {
  fs.writeFile("data.json", JSON.stringify(formatterArr), (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
});
