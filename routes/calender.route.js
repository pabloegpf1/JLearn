const express = require('express');
const router = express.Router();
const passport = require('passport')
var calenderController = require("../controllers/calender.controller.js");



function isLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
        res.redirect('/login')
    }
    else {
        next();
    }
}

router.get('/', (req, res) => {
	res.render('pages/calender')
});

router.get('/init', calenderController.init);

router.get('/data', calenderController.gdata);
router.post('/data', calenderController.data);

module.exports = router;