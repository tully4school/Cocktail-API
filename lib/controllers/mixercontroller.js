Mixer = require("../models/Mixer");
const drinkController = {
	index: (req, res) => {
		Mixer.find({}).then(drink => {
			res.json(drink);
		});
	},
	showAlcohol: (req, res) => {
		Mixer.find({ alcohol: req.params.alcohol }).then(drink => {
			res.json(drink);
		});
	},
	showName: (req, res) => {
		Mixer.find({ drinkName: req.params.drinkName }).then(drink => {
			res.json(drink);
		});
	},
	create: (req, res) => {
		mixer.create(req.body).then(drink => {
			res.json(drink);
		});
	},
	edit: (req, res) => {
		Mixer.findOneAndUpdate({ drinkName: req.params.drinkName }, req.body).then(
			drink => {
				res.json(drink);
			}
		);
	},
	delete: (req, res) => {
		Mixer.findOneAndDelete({ drinkName: req.params.drinkName }).then(drink => {
			req.json(drink);
		});
	}
};
module.exports = drinkController;
