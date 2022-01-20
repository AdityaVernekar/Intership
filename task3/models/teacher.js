const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  class: {
    type: "Number",
    required: true,
  },
});

module.exports = mongoose.model("Teacher", teacherSchema) || mongoose.models.Teacher;
