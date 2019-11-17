const Drink = require("../models/Mixer");
const drinkData = require("./drinks");

const mixerData = drinkData.map(item => {
	const drink = {
		drinkNumber: item.drinkNumber,
		drinkName: item.drinkName,
		alcohol: item.alcohol,
		drinkCategory: item.category,
		drinkGlass: item.drinkGlass,
		drinkIngredients: item.drinkIngredients,
		drinkMeasures: item.drinkMeasures,
		drinkInstructions: item.drinkInstructions
	};
	return drink;
});
Drink.deleteMany({}).then(() => {
	Drink.create(mixerData)
		.then(drinks => {
			console.log(drinks);
		})
		.then(process.exit)
		.catch(err => {
			console.log(err);
		});
});
