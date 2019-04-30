const express = require('express');
const courseController = require('../controllers/course.controller');

const router = express.Router();


function isLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
        res.redirect('/login')
    }
    else {
        next();
    }
}

router.get(`/`, isLoggedIn, courseController.list);

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

router.get('/userprofile', (req, res) => {
    res.render('pages/userprofile');
});

module.exports = router;