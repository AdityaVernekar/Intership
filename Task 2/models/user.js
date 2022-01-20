const mongoose = require("mongoose");

// name, age, email, address, income,Marital Status, registration number and  registration date etc.
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    income: {
      type: Number,
      required: true,
    },
    maritalStatus: {
      type: Boolean,
      required: true,
      default: false,
    },
    registrationNumber: {
      type: Number,
      required: true,
    },
    registrationDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema) || mongoose.models.User;
