const crypto = require("crypto");

 process.env.UV_THREADPOOL_SIZE = 8;

// for (let i = 0; i < 10; i++) {
//   crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
//     console.log(`${i + 1} - crypto genertated done`);
//   });
// }

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log(`1 - crypto genertated done`);
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log(`2 - crypto genertated done`);
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log(`3 - crypto genertated done`);
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log(`4 - crypto genertated done`);
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log(`5 - crypto genertated done`);
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log(`6 - crypto genertated done`);
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log(`7 - crypto genertated done`);
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log(`8 - crypto genertated done`);
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log(`9 - crypto genertated done`);
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log(`10 - crypto genertated done`);
});