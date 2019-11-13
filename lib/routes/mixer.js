const express = require("express");
const router = express.Router();
const drinkController = require("../controllers/mixercontroller.js");

router.get("/drinks", drinkController.index);
router.get("/drinks/name/:drinkName", drinkController.showName);
router.get("/drinks/alcohol/:alcohol", drinkController.showAlcohol);

module.exports = router;
