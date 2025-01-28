const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/node-tutorial");
    console.log("database connected...");
  } catch (error) {
    console.log("database isn't connectd..");
    console.log("🚀 ~ dbConnection ~ error:", error);
  }
};

module.exports = { dbConnection };
