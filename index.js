const express = require('express');
const method = require('method-override');
const mongoose = require('./db/connection.js');
const port = 3000;

const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({ extended: true }));
app.use(method('_method'));
app.use(express.static('public'));

const Challenges = require('./models/Challenges.js');

const challengesController = require('./controllers/challenges.js');

app.get('/', (req, res) => {
	Challenges.find({})
		.sort({ createdAt: -1 })
		.then(challenges => {
			res.render('Index', { challenges });
		});
});

app.use('/challenges', challengesController);

mongoose.connection.once('open', () => {
	console.log('connected to mongo');
});

app.listen(port, () => console.log("It's Alive! "));
