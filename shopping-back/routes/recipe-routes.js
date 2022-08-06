const {
  addRecipe,
  getRecipes,
  deleteRecipe,
} = require("../controllers/recipe-controllers");

express = require("express");
const router = express.Router();

router.post("/newRecipe", addRecipe);
router.get("/getRecipes", getRecipes);
router.delete("/deleteRecipe/:id", deleteRecipe);

module.exports = router;
