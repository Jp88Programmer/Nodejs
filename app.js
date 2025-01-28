const express = require("express");
const { dbConnection } = require("./config/db-connection");
const { User } = require("./modules/User");
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/get-user", async (req, res) => {
  const user = await User.find();
  if (user && user.lenght > 0) {
    console.log(user);
    res.status(200).json({
      success: true,
      data: user,
    });
  } else {
    res.status(200).json({
      success: false,
      error: "User not found",
    });
  }
});

app.post("/create-user", async (req, res) => {
  console.log("🚀 ~ app.post ~ req.body:", req.body);
  const { name, email, password } = req.body;
  console.log("🚀 ~ app.post ~ name, email, password:", name, email, password);

  const user = new User({ name, email, password });

  try {
    await user.save();
    res.status(201).json({
      success: true,
      message: "User data successfully insertd..",
    });
  } catch (err) {
    res.status(200).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

async function main() {
  try {
    await dbConnection();
    app.listen(PORT, () => {
      console.log(`Server is running on port no: ${PORT}`);
    });
  } catch (error) {
    console.log(err);
  }
}

main();
