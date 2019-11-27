const Challenges = require('../models/Challenges');
const data = require('./seeds.json');
const mongoose = require('./connection.js');

mongoose.connection.once('open', () => {
	console.log('connected to mongo');
});

Challenges.deleteMany({})
	.then(() => {
		return Challenges.collection.insertMany(data);
	})
	.then(() => {
		process.exit();
	});
