var mongoose = require('mongoose');
const GradeBook = require('../models/gradeBook.model');
const GradeBookItem = require('../models/gradeBookItem.model');

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

module.exports.addGradeItem = (req, res) => {
    GradeBook.find({ course: req.params.id })
        .populate('course')
        .limit(1)
        .then(gradebook => {
            if (gradebook[0].course.professor == req.user._id) { //is Professor of the course
                gradebook[0].items.push = {
                    weight: 10,
                    dueDate: '2019-02-01',
                    MaxPoints: 100
                    //other values...
                };
                gradebook[0].save(function (err) {
                    if (err) console.error(err)
                    res.redirect('/courses/' + req.params.id + '/gradebook')
                });
            } else {
                res.redirect('/')
            }
        })
        .catch(err => console.error(err));
};
