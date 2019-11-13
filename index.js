const express = require("express");
const app = express();
const parser = require("body-parser");
const Drink = require("./lib/models/Mixer");

app.use(parser.json());

app.get("/drinks", function(req, res) {
	Drink.find({}).then(drinks => res.json(drinks));
});

app.listen(3000, () => console.log("listening for mixers on port 3000"));
