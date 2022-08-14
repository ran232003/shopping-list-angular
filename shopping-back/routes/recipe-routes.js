const {
  addRecipe,
  getRecipes,
  deleteRecipe,
} = require("../controllers/recipe-controllers");

express = require("express");
const router = express.Router();

router.post("/newRecipe/:id", addRecipe);
router.get("/getRecipes/:id", getRecipes);
router.delete("/deleteRecipe/:id", deleteRecipe);

module.exports = router;
