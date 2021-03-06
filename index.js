const express = require("express");
const app = express();
const parser = require("body-parser");
const cors = require("cors");

app.use(parser.urlencoded({ extended: true }));
app.use(cors());
app.use(parser.json());
app.use(require("./lib/routes/index"));
app.get("/", (req, res) => {
	res.redirect("/drinks");
});
app.post("/drinks/", function(req, res) {
	Mixer.create(req.body).then(drink => {
		res.json(drink);
	});
});
app.put("/drinks/:id", function(req, res) {
	Mixer.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true
	}).then(drink => {
		res.json(drink);
	});
});
app.delete("/drinks/:id", function(req, res) {
	Mixer.findOneAndRemove({ _id: req.params.id }).then(drink => {
		res.json(drink);
	});
});
app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
	console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
