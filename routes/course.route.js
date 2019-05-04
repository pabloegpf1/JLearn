const express = require('express');
const courseController = require('../controllers/course.controller');
const gradebookController = require('../controllers/gradebook.controller');


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

//Gradebook
router.get(`/:id/gradebook`, isLoggedIn, gradebookController.list);


module.exports = router;