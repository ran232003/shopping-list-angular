const express = require("express");
const bodyParser = require("body-parser");
const Recipe = require("../models/recipe-model");
const app = express();
app.use(bodyParser.json());
const mongoose = require("mongoose");

const addRecipe = async (req, res, next) => {
  console.log("working", req.body);
  let id = req.params.id;
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
};
const getRecipes = async (req, res, next) => {
  console.log("here");
  let id = req.params.id;

  console.log(id);
  let recipes = await Recipe.find({ userId: id });
  res.json({ dbRecipes: recipes });
};
const deleteRecipe = async (req, res, next) => {
  console.log("delete", req.params.id);
  let id = req.params.id;
  let deletedRecipe = await Recipe.findOneAndDelete({ id: id });
  console.log(deletedRecipe);
  res.json({ status: "success!" });
};

module.exports = {
  addRecipe: addRecipe,
  getRecipes: getRecipes,
  deleteRecipe: deleteRecipe,
};
