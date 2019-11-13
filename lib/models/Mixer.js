const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Mixer = new Schema({
	drinkNumber: Number,
	drinkName: String,
	alcohol: Boolean,
	drinkCategory: String,
	drinkThumb: String,
	drinkGlass: String,
	drinkIngredients: [String],
	drinkMeasures: [{}],
	drinkInstructions: String
});

module.exports = mongoose.model("Mixer", Mixer);
