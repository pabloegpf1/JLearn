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
router.get(`/:id/add-block`, isLoggedIn, courseController.addBlock)
router.post(`/:id/add-block`, isLoggedIn, courseController.createCourseBlock);
router.get(`/:id/participants`, isLoggedIn, courseController.participants);
router.get(`/:id/block/:id`, isLoggedIn, courseController.courseBlockDetail);
router.put(`/:id/block/:id`, isLoggedIn, courseController.courseBlockEdit);
router.delete(`/:id/block/:id`, isLoggedIn, courseController.courseBlockDelete);

//Gradebook
router.get(`/:id/gradebook`, isLoggedIn, gradeBookController.list);

router.get('/userprofile', isLoggedIn, (req, res) => {
    res.render('pages/userprofile');
});
router.post(`/:id/add-grade-item`, isLoggedIn, gradeBookController.addGradeItem);
router.post(`/:id/:submissionId/add-submission`, isLoggedIn, submissionController.addSubmissionForItem);

module.exports = router;