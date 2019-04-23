
const express = require('express')
const path = require('path')
const logger = require('morgan')
const createError = require('http-errors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const course = require('./models/course.model')
dotenv.config()

const coursesRouter = require('./routes/course.route')
const indexRouter = require('./routes/index.route')

const app = express()

mongoose
	.connect(
		`mongodb+srv://JLearn:${process.env.DB_PASSWORD}@ilearnclone-lgvzf.gcp.mongodb.net/test?retryWrites=true`,
		{
			useNewUrlParser: true
		}
	)
	.then(() => console.log(`MongoDB connection successful`))
	.catch((err) => {
		console.log(`MongoDB connection error: ${err}`)
		createError(500)
	})

// view engine setup
app.set(`view engine`, `ejs`)
app.set(`views`, path.join(__dirname, `views`))

// logger + middleware
app.use(logger(`dev`))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, `public`)))

// redirect bootstrap dependencies
app.use(express.static(path.join(__dirname, '/node_modules/bootstrap/dist')))
app.use(express.static(path.join(__dirname, '/node_modules/jquery/dist')))

// temporary serving view GET requests
app.get('/', (req, res) => {
	res.render('pages/index')
})
app.get('/home', (req, res) => {
	res.render('pages/ilearn-homepage')
})

// Rest API routes
app.use(`/courses`, coursesRouter)

// if it made it here, app broke
app.use((req, res, next) => createError(500))

app.listen(3000, () => console.log(`Express running...`))
