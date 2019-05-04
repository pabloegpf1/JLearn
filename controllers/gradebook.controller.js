var mongoose = require('mongoose');
const GradeBook = require('../models/gradeBook.model');

module.exports.list = (req, res) => {
    GradeBook.find({ course: req.params.id })
        .populate('course')
        .limit(1)
        .then(gradebook => {
            res.render('pages/gradebook', {
                course: gradebook[0].course,
                items: gradebook[0].items
            })
        })
        .catch(err => res.send(err));
};

