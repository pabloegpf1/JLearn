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
router.get('/inbox', (req, res) => {
	res.render('pages/inbox', {
		meow: 1,
		chats: [["Annoying Student", [
			[0, "0 is from John"],
			[1, "From Annoying Student"],
			[1, "When is Homework 2 going to be graded?"],
			[0, "When i feel like it....."],
			[0, ".....Dumbass"]
		]],
		["Mulan", [
			[0, "0 is from John"],
			[1, "From Mulan"],
			[1, "Can i go to disneyland?"],
			[1, "Can i have an A"],
			[0, "NO"]
		]]
	]
	})
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

module.exports = router;
