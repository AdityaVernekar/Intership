const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const app = express();
const User = require("./models/user");
const db = require("./db/connect");

// Load environment variables from .env file
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

app.post("/api/upcloud/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
});

app.get("/api/upcloud/users", async (req, res) => {
  try {
    const users = await User.find({}, { name: 1, age: 1, email: 1, _id: 0 });
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
});
