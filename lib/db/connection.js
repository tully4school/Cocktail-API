const mongoose = require("mongoose");

mongoose
	.connect("mongodb://localhost/drinks", {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(console.log("Connected to mongoose"))
	.catch(err => console.log(err));

module.exports = mongoose;
