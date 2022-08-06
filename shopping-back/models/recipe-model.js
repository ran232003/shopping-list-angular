const mongoose = require("mongoose");

recipeSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  desc: {
    type: String,
    trim: true,
    required: true,
  },
  imagePath: String,
  ingredients: [],
  id: {
    type: String,
    trim: true,
    required: true,
    uniqe: true,
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
