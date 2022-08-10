const express = require("express");
const bodyParser = require("body-parser");
const User = require("../models/user-model");

const app = express();
app.use(bodyParser.json());

const signup = async (req, res, next) => {
  console.log("working", req.body);
  let userData = req.body;
  let checkUser = await User.findOne({
    email: userData.email,
  });
  if (checkUser) {
    //user exist
    res.json({ status: "fail" });
  } else {
    //create user
    let user = new User(userData);
    await user.save();
    res.json({ status: "success" });
  }
};

module.exports = {
  signup: signup,
};
