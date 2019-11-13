const Drink = require("../models/Mixer");
const drinkData = require("./drinks");

const mixerData = drinkData.map(item => {
	const drink = {
		number: item.drinkNumber,
		name: item.drinkName,
		alcohol: item.alcohol,
		category: item.category,
		glass: item.drinkGlass,
		ingredients: item.drinkIngredients,
		measures: item.drinkMeasures,
		instructions: item.drinkInstructions
	};
	return drink;
});
// console.log(mixerData);
Drink.deleteMany({}).then(() => {
	Drink.create(drinkData)
		.then(drinks => {
			console.log(drinks);
		})
		.then(process.exit)
		.catch(err => {
			console.log(err);
		});
});
