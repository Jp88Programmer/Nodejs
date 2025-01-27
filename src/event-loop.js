const fs = require("fs");
// import fs from "fs";

setImmediate(() => console.log("This is the code setImmediate"));

setTimeout(() => console.log("code execute after 0 seconds"), 0);

Promise.resolve("Promise is resolved").then((res) => {
  console.log(res);
  Promise.resolve("Inner Promise is resolved").then((res) => console.log(res));
});

fs.readFile("log.txt", "utf-8", (err, data) => {
  setTimeout(() => console.log("This is the log after file read"), 0);

  process.nextTick(() => console.log("This is the nextTick after file read"));

  setImmediate(() =>
    console.log("This is the code setImmediate after file read")
  );

  console.log("This the file data", data);
});

process.nextTick(() => {
  console.log("This is the code nextTick");
  process.nextTick(() => console.log("This is the inner nextTick"));
});

console.log("end of the code");
