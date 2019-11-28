const express = require('express');
const router = express.Router();

const Challenges = require('../models/Challenges.js');

router.get('/', (req, res) => {
	Challenges.find({}).then(challenges => {
		res.render('challenges/Index', { challenges });
	});
});

router.get('/new', (req, res) => {
	res.render('challenges/New');
});

router.get('/:id', (req, res) => {
	Challenges.findOne({ _id: req.params.id }).then(challenge => {
		res.render('challenges/Show', challenge);
	});
});

router.post('/', (req, res) => {
	Challenges.create(req.body).then(() => {
		res.redirect('/');
	});
});

router.get('/edit/:id', (req, res) => {
	Challenges.findOne({ _id: req.params.id }).then(challenge => {
		res.render('challenges/Edit', challenge);
	});
});

router.put('/:id', (req, res) => {
	Challenges.findOneAndUpdate({ _id: req.params.id }, req.body).then(
		challenge => {
			res.redirect(`/${challenge.id}`);
		}
	);
});

router.delete('/:id', (req, res) => {
	Challenges.findOneAndRemove({ _id: req.params.id }).then(() => {
		res.redirect('/');
	});
});

module.exports = router;
