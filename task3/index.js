const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./db/connect");
const Teacher = require("./models/teacher");
const User = require("./models/user");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.post("/api/upcloud/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.log(error);
  }
});
app.post("/api/upcloud/teachers", async (req, res) => {
  try {
    const teacher = await Teacher.create(req.body);
    res.status(201).json({
      message: "teacher created successfully",
      teacher,
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/api/upcloud/getInfo/:class", async (req, res) => {
  try {
    const className = req.params.class;
    const users = await User.find({ class: className });
    const teacher = await Teacher.findOne({ class: className });
    // const array = [];
    // users.forEach((user) => {
    //   array.push(user.name);
    // });

    const output = {
      students: users,
      teacher: teacher,
    };

    // res.status(200).json(output);
    console.log(output);
    res.send({
      message: "success",
    });
  } catch (error) {
    console.log(error);
  }
});
