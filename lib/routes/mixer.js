const express = require("express");
const router = express.Router();
const drinkController = require("../controllers/mixercontroller.js");

router.get("/drinks", drinkController.index);
router.get("/drinks/id/:_id", drinkController.showId);
router.get("/name/:drinkName", drinkController.showName);
router.get("/drinks/has-alcohol/:alcohol", drinkController.showAlcohol);
router.get("/drinks/glass/:drinkGlass", drinkController.showGlass);
router.get("/drinks/category/:drinkCategory", drinkController.showCategory);
router.get("/drinks", drinkController.create);
router.get("/drinks/name/:drinkName", drinkController.edit);
router.get("/drinks/has-alcohol/:alcohol", drinkController.edit);
router.get("/drinks/glass/:drinkGlass", drinkController.edit);
router.get("/drinks/name/:drinkName", drinkController.delete);

module.exports = router;
