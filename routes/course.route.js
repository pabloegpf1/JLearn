const express = require('express');
const courseController = require('../controllers/course.controller');
const gradeBookController = require('../controllers/gradebook.controller');
const submissionController = require('../controllers/submission.controller');

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
router.post(`/:id/add-grade-item`, isLoggedIn, gradeBookController.addGradeItem);
router.post(`/:id/:submissionId/add-submission`, isLoggedIn, submissionController.addSubmissionForItem);
router.get(`/:id/gradebook`, isLoggedIn, gradeBookController.list);

module.exports = router;