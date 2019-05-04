var mongoose = require('mongoose');
const GradeBook = require('../models/gradeBook.model');

module.exports.list = (req, res) => {
    GradeBook.find({})
        //.populate('course')
        //.limit(1)
        .then(gradeBook => {
            console.log(gradeBook)
            res.send(gradeBook.course);
        })
        .catch(err => res.send(err));
};

