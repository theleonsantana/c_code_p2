const mongoose = require('mongoose');
const db = mongoose.connection;
//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI =
	process.env.MONGODB_URI || 'mongodb://localhost/' + `codechallenges`;

mongoose.connect(MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

// Error / success
db.on('error', err => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo
db.on('open', () => {});

mongoose.Promise = Promise;

module.exports = mongoose;
