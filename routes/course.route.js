const express = require('express');
const courseController = require('../controllers/course.controller');

const router = express.Router();

router.get(`/`, courseController.list);

router.get('/assignment', (req, res) => {
	res.render('pages/assignment');
});

router.get('/gradebook', (req, res) => {
	res.render('pages/gradebook');
});


router.get('/detail', (req, res) => {
	res.render('pages/course-detail');
});

router.get('/profgradebook', (req, res) => {
	res.render('pages/profgradebook');
});

module.exports = router;