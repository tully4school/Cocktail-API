const mongoose = require("../db/connection");
const Schema = mongoose.Schema;
const ingredientSchema = require("./Ingredients").schema;

const Mixer = new Schema({
	drinkNumber: Number,
	drinkName: String,
	alcohol: String,
	drinkCategory: String,
	drinkThumb: String,
	drinkGlass: String,
	drinkIngredients: [String],
	drinkMeasures: [{}],
	drinkInstructions: String
});

module.exports = mongoose.model("Mixer", Mixer);
