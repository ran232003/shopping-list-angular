const express = require("express");
const bodyParser = require("body-parser");
const User = require("../models/user-model");
const bcrypt = require("bcrypt");
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
    let hashPassword = await bcrypt.hash(userData.password, 12);
    console.log("hash", hashPassword);
    let newUserData = { ...userData };
    newUserData.password = hashPassword;
    let user = new User(newUserData);
    await user.save();
    res.json({ status: "success", user: user });
  }
};
const login = async (req, res, next) => {
  console.log("working", req.body);
  let userData = req.body;
  let checkUser = await User.findOne({
    email: userData.email,
  });
  if (!checkUser) {
    //user not exist
    res.json({ status: "fail" });
  } else {
    // user exist
    bcrypt.compare(
      userData.password,
      checkUser.password,
      function (err, result) {
        if (result) {
          res.json({ status: "success", user: checkUser });
        } else {
          res.json({ status: "fail", user: checkUser });
        }
        // result == true
      }
    );
  }
};

module.exports = {
  signup: signup,
  login: login,
};
