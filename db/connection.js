const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/codechallenges', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});
mongoose.Promise = Promise;

module.exports = mongoose;
