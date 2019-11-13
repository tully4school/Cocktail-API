const express = require("express");
const router = express();

router.use(require("./mixer"));

module.exports = router;
