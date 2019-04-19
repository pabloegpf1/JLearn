// temporary serving view GET requests
const express = require('express')
const router = express.Router()
const indexController = require('../controllers/index.controller')

router.get('/', indexController.list)

router.get('/login', (req, res) => {
	res.render('pages/login')
})

router.get('/profile', (req, res) => {
	res.render('pages/profile')
})

router.post('/login', (req, res) => {
	console.log('request: ')
	console.log(req.body)
	res.send('hello')
})

router.post('/logout', (req, res) => {
	res.send('hello')
})

module.exports = router
