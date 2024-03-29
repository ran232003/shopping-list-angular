const express = require("express");
const bodyParser = require("body-parser");
const Recipe = require("../models/recipe-model");
const app = express();
app.use(bodyParser.json());
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const addRecipe = async (req, res, next) => {
  console.log("working", req.body);
  let id = req.params.id;
  let token = req.headers["token"];
  console.log("token", token);
  try {
    let decodeToken = jwt.verify(token, "my-secret");
    console.log(decodeToken, "decode");
  } catch (error) {
    res.json({ status: "token expire" });
  }
  try {
    let newRecipe = req.body;
    newRecipe = { ...newRecipe };
    newRecipe["userId"] = id;
    let checkRecipe = await Recipe.findOne({
      name: newRecipe.name,
      desc: newRecipe.desc,
    });
    console.log(checkRecipe);
    if (checkRecipe) {
      res.json({ status: "Recipe Exist" });
    } else {
      let recipe = new Recipe(newRecipe);
      await recipe.save();
      res.json({ status: "success" });
    }
  } catch (error) {
    res.json({ status: "error" });
  }
};
const getRecipes = async (req, res, next) => {
  try {
    console.log("get recipe");
    let id = req.params.id;

    console.log("id user", id);
    let recipes = await Recipe.find({ userId: id });
    res.json({ dbRecipes: recipes });
  } catch (error) {
    res.json({ status: "error" });
  }
};
const deleteRecipe = async (req, res, next) => {
  try {
    console.log("delete", req.params.id);
    let id = req.params.id;
    let deletedRecipe = await Recipe.findOneAndDelete({ id: id });
    console.log(deletedRecipe);
    res.json({ status: "success" });
  } catch (error) {
    res.json({ status: "error" });
  }
};

module.exports = {
  addRecipe: addRecipe,
  getRecipes: getRecipes,
  deleteRecipe: deleteRecipe,
};
