import https from "https";
import fs from "fs";

console.log("Hello World");

https.get("https://jsonplaceholder.typicode.com/posts", (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    const arr = JSON.parse(data);

    console.log(arr[0]);
  });
});

fs.readFile("log.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

setTimeout(() => console.log("code execute after 0 seconds"), 0);

const multiply = (num1, num2) => {
  return num1 * num2;
};

console.log("Multiply Two number is", multiply(34, 89));

console.log("end of the code");

Promise.resolve("Promise is resolved").then((res) => console.log(res));

process.nextTick(() => console.log("This is the code nextTick"));

setImmediate(() => console.log("This is the code setImmediate"));