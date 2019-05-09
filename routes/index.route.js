// temporary serving view GET requests

const express = require('express')
const router = express.Router()
const passport = require('passport')
const indexController = require('../controllers/index.controller')

router.get('/', indexController.list)

router.get('/login', (req, res) => {
	res.render('pages/login', {
		authMessage: req.flash('authMessage'),
	})
})

router.get('/profile', (req, res) => {
	res.render('pages/profile')
})

router.post('/login',
	passport.authenticate('local', {
		successRedirect: '/courses',
		failureRedirect: '/login',
		failureFlash: true
	})
)

router.post('/logout', (req, res) => {
	res.send('hello')
})

router.get('/home', (req, res) => {
	res.render('pages/homepage');
});

router.get('/userprofile', (req, res) => {
    res.render('pages/userprofile');
});

router.get('/messages', (req, res) => {
    res.render('pages/messages');
});

router.get('/calender', (req, res) => {
    res.render('pages/calender');
});


module.exports = router;
