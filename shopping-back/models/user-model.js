const mongoose = require("mongoose");

userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    uniqe: true,
  },

  password: {
    type: String,
    trim: true,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
