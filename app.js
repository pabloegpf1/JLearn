const express = require('express');
const path = require('path');
const logger = require('morgan');
const createError = require('http-errors');
const mongoose = require('mongoose');


const indexRouter = require('./routes/index.route');
const coursesRouter = require('./routes/course.route');

const app = express();

mongodb setup
mongoose.connect(`URL FROM MLAB HERE`, {useNewUrlParser: true})
    .then(() => console.log(`MongoDB connection successful`))
    .catch(err => {
        console.log(`MongoDB connection error: ${err}`);
        createError(500);
    });

// view engine setup
app.set(`view engine`, `ejs`);
app.set(`views`, path.join(__dirname, `views`));

// logger + middleware
app.use(logger(`dev`));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// frontend paths + redirect bootstrap dependencies
app.use(express.static(path.join(__dirname, `public`)));
app.use(express.static(path.join(__dirname,'/node_modules/bootstrap/dist'))); 
app.use(express.static(path.join(__dirname,'/node_modules/jquery/dist'))); 


app.use(`/`, indexRouter);
app.use(`/courses`, coursesRouter);

// if it made it here, app broke
app.use((req, res, next) => createError(500));

app.listen(3000, () => console.log(`Express running...`));