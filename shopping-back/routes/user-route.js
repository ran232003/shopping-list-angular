const { signup, login } = require("../controllers/user-controllers");

express = require("express");
const router = express.Router();

router.post("/newUser", signup);
router.post("/login", login);

module.exports = router;
