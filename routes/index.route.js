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
		chats: [["Annoying Student", [
			[0, "0 is from John"],
			[1, "From Annoying Student"],
			[1, "When is Homework 2 going to be graded? I also wanted to say that i really like turnips.. they taste so good i just can help myself"],
			[0, "When i feel like it....."],
			[0, ".....Dumbass"],
			[0, "0 is from John"],
			[1, "From Annoying Student"],
			[1, "When is Homework 2 going to be graded? I also wanted to say that i really like turnips.. they taste so good i just can help myself"],
			[0, "When i feel like it....."],
			[0, ".....Dumbass"],
			[0, "0 is from John"],
			[1, "From Annoying Student"],
			[1, "When is Homework 2 going to be graded? I also wanted to say that i really like turnips.. they taste so good i just can help myself"],
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
router.get('/calendar', (req, res) => {
	res.render('pages/calendar', {
		calendarItem: [["5/15/19", "Assignment 1", "CSC668"],
		["5/15/19", "Assignment 1", "CSC668"],
		["5/16/19", "Assignment 2", "CSC668"],
		["5/17/19", "Assignment 3", "CSC668"],
		["5/18/19", "Assignment 4", "CSC668"],
		["6/3/19", "Grades are Due", "University"],
		["5/30/19", "Presentation", "CSC668"],
		["5/14/19", "Colombian Revolution", "HIST444"]
		["5/17/19", "Unions and Shit", "HIST444"]
	]
	});
});

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
