
const express = require('express')
const path = require('path')
const logger = require('morgan')
const createError = require('http-errors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const passport = require('passport')
const localStrategy = require('passport-local').Strategy;
const User = require('./models/user.model');
var bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');

dotenv.config()

const coursesRouter = require('./routes/course.route')
const indexRouter = require('./routes/index.route')

const app = express()

mongoose
	.connect(
		`mongodb+srv://JLearn:${process.env.DB_PASSWORD || 'lnw8qJ9pkS07ou6i'}@ilearnclone-lgvzf.gcp.mongodb.net/test?retryWrites=true`,
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

// PASSPORT

app.use(flash());
app.use(session({
	secret: 'secret',
	saveUninitialized: true,
	resave: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
	done(null, user);
});
passport.deserializeUser(function (user, done) {
	done(null, user);
});

// passport login strategy
passport.use(new localStrategy({
	usernameField: 'loginKey',
	passwordField: 'loginPassword',
	passReqToCallback: true
}, function (req, loginKey, loginPassword, done) {
	User.findOne({ sfsu_id: JSON.parse(loginKey) }, function (err, user) {
		if (err) {
			return done(err)
		}
		if (!user) {
			console.log("Incorrect username.")
			return done(null, false, req.flash("authMessage", 'Incorrect username.'));
		}
		if (user.toObject().password != loginPassword) {
			console.log("Incorrect password.")
			return done(null, false, req.flash("authMessage", 'Incorrect password.'));
		}
		return done(null, user);
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
