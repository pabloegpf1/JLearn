// temporary serving view GET requests
const express = require('express')
const router = express.Router()
const passport = require('passport')
const indexController = require('../controllers/index.controller')

router.get('/', indexController.list)

router.get('/login', (req, res) => {
	res.render('pages/login')
})

router.get('/profile', (req, res) => {
	res.render('pages/profile')
})

router.post('/login',
	passport.authenticate('local', {
		successRedirect: '/',
		failureRedirect: '/login',
		failureFlash: false
	})
)

router.post('/logout', (req, res) => {
	res.send('hello')
})

module.exports = router
