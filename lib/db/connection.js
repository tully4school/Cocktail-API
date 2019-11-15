const mongoose = require("mongoose");
let mongoURI = "";

if (process.env.NODE_ENV === "production") {
	mongoURI = process.env.DB_URL;
} else {
	mongoURI = "mongodb://localhost/drinks";
}
mongoose
	.connect(mongoURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(console.log(`Connected to db: ${instance.connections[0].name}`))
	.catch(err => console.log("connection failed", err));

module.exports = mongoose;
