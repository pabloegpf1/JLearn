const express = require('express');
const courseController = require('../controllers/course.controller');
const gradeBookController = require('../controllers/gradebook.controller');

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
router.get(`/:id/participants`, isLoggedIn, courseController.particpants);
router.get(`/:id/add-grade-item`, isLoggedIn, gradeBookController.addGradeItem);
router.get(`/:id/gradebook`, isLoggedIn, gradeBookController.list);

module.exports = router;