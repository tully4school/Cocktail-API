const express = require("express");
const app = express();
const parser = require("body-parser");
const Drink = require("./lib/models/Mixer");

app.use(parser.json());
app.use(require("./lib/routes/index"));

app.listen(3000, () => console.log("listening for mixers on port 3000"));
