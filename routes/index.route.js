// temporary serving view GET requests
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('pages/index');
});

router.get('/home', (req, res) => {
	res.render('pages/ilearn-homepage');
});

router.get('/grades', (req, res) => {
	res.render('pages/grades');
});

router.get('/gradebook', (req, res) => {
	res.render('pages/grade-book');
});

module.exports = router;