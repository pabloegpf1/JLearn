// temporary serving view GET requests
const express = require('express')
const router = express.Router()
const passport = require('passport')
const indexController = require('../controllers/index.controller')

function isLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
        res.redirect('/login')
    }
    else {
        next();
    }
}

router.get('/', isLoggedIn, indexController.list)

router.get('/login', (req, res) => {
	res.render('pages/login', {
		authMessage: req.flash('authMessage'),
	})
})

router.get('/profile', isLoggedIn, (req, res) => {
	res.render('pages/profile', {
		user: req.user
	});
});

router.post('/login',
	passport.authenticate('local', {
		successRedirect: '/courses',
		failureRedirect: '/login',
		failureFlash: true
	})
)

router.post('/logout', isLoggedIn, (req, res) => {
	req.logout();
	res.redirect('/login');
});

router.get('/home', (req, res) => {
	res.render('pages/homepage');
});

module.exports = router;
