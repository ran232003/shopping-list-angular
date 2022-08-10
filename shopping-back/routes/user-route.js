const { signup } = require("../controllers/user-controllers");

express = require("express");
const router = express.Router();

router.post("/newUser", signup);

module.exports = router;
