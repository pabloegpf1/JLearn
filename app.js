const express = require('express')
const path = require('path')
const logger = require('morgan')
const createError = require('http-errors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const passport = require('passport')
const localStrategy = require('passport-local').Strategy;
const Student = require('./models/student.model');
var bodyParser = require('body-parser');

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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// passport login strategy
passport.use(new localStrategy({
	usernameField: 'loginKey',
	passwordField: 'loginPassword'
},
	function (loginKey, loginPassword, done) {
		Student.findOne({ sfsu_id: JSON.parse(loginKey) }, function (err, student) {
			console.log(student)
			console.log("Student.password: " + student.password + " given password:" + loginPassword)
			if (err) {
				return done(err)
			}
			if (!student) {
				console.log("Incorrect username.")
				return done(null, false, { message: 'Incorrect username.' });
			}
			if (student[password] != loginPassword) {
				console.log("Incorrect password.")
				return done(null, false, { message: 'Incorrect password.' });
			}
			return done(null, student);
		});
	}
));

// redirect bootstrap dependencies
app.use(express.static(path.join(__dirname, '/node_modules/bootstrap/dist')))
app.use(express.static(path.join(__dirname, '/node_modules/jquery/dist')))

// Rest API routes
app.use(`/`, indexRouter)
app.use(`/courses`, coursesRouter)

// if it made it here, app broke
app.use((req, res, next) => createError(500))

app.listen(3000, () => console.log(`Express running...`))