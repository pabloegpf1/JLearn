// temporary serving view GET requests
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('pages/index');
});

router.get('/home', (req, res) => {
	res.render('pages/homepage');
});

router.get('/assignment', (req, res) => {
	res.render('pages/assignment');
});

router.get('/gradebook', (req, res) => {
	res.render('pages/gradebook');
});

module.exports = router;