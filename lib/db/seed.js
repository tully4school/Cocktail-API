const Drink = require("../models/Mixer");
const drinkData = require("./drinks");
Drink.deleteMany({}).then(() => {
	Drink.create(drinkData)
		.then(drinks => {
			console.log(drinks);
		})
		.catch(err => {
			console.log(err);
		});
});
