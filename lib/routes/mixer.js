const express = require("express");
const router = express.Router();
const drinkController = require("../controllers/mixercontroller.js");

router.get("/drinks", drinkController.index);
