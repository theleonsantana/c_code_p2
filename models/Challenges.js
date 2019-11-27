const mongoose = require('../db/connection');

const ChallengesSchema = new mongoose.Schema({
	problem: String,
	author: String,
	source: String,
	language: String,
	solution: String,
	tags: [String],
	createdAt: { type: Date, default: Date.now },
});

const Challenges = mongoose.model('Challenge', ChallengesSchema);

module.exports = Challenges;
