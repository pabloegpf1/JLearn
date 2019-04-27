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
router.get(`/:id`, isLoggedIn, courseController.detail);
router.post(`/:id/add-block`, isLoggedIn, courseController.addBlock);

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