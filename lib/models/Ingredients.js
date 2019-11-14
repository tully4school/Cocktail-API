const mongoose = require("../db/connection");
const Schema = mongoose.Schema;
const drinkData = require("../db/drinks.json");

// const ingredientData = drinkData.map(item => {
// 	const ingredients = {
// 		drinkIngredients: item.drinkIngredients
// 	};
// 	return ingredients;
// });
// console.log(ingredientData);
const Ingredients = new Schema({
	drinkIngredients: [String]
});

module.exports = mongoose.model("Ingredients", Ingredients);
