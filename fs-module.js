import fs from "fs";

// This is a synchronous method to write/read to a file
// console.log("🚀 ~ start writing file:");
// for (let i = 0; i < 10; i++) {
//   try {
//     const data = fs.readFileSync("data.txt", { encoding: "utf8" });
//     const writeData = fs.writeFileSync("data.txt", data + " " + "Hello World");
//   } catch (error) {
//     const writeData = fs.writeFileSync("data.txt", "Hello World");
//   }
// }
// console.log("🚀 ~ end writing file:");

// // read file with synchronous method
// const data = fs.readFileSync("data.txt", { encoding: "utf8" });
// console.log(data);

// This is an asynchronous method to write/read to a file
console.log("🚀 ~ start writing file:");

const data = fs.readFile("data.txt", { encoding: "utf8" }, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
console.log("🚀 ~ end writing file:");