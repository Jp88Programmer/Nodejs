const express = require("express");
const { dbConnection } = require("./config/db-connection");
const { User } = require("./modules/User");
const { default: mongoose } = require("mongoose");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get("/get-user", async (req, res) => {
  const user = await User.find();

  if (user && user.length > 0) {
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
  const { name, email, password } = req.body;

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

app.patch("/update-user/:id", async (req, res) => {
  const { id } = req.params;

  const { name, email, password } = req.body;

  try {
    const userById = await User.findById(new mongoose.Types.ObjectId(id));
    const user = await User.findByIdAndUpdate(new mongoose.Types.ObjectId(id), {
      ...(name && { name }),
      ...(email && { email }),
      ...(password && { password }),
    });
    await user.save();
    res.status(200).json({
      success: true,
      message: "User data successfully updated..",
    });
  } catch (err) {
    res.status(200).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

app.delete("/delete-user/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(new mongoose.Types.ObjectId(id));
    if (user) {
      res.status(200).json({
        success: true,
        message: "User data successfully deleted..",
      });
    } else {
      res.status(200).json({
        success: false,
        message: "User data not found..",
      });
    }
  } catch (error) {
    res.status(500).json({
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
