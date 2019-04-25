// temporary serving view GET requests
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('pages/index');
});

router.get('/home', (req, res) => {
	res.render('pages/homepage');
});


module.exports = router;