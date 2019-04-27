const Course = require('../models/course.model');

module.exports.list = (req, res) => {
    Course.find()
        .then(courses => res.send(courses))
        .catch(err => res.send(err));
}

module.exports.detail = (req, res) => {
    Course.findOne({id: req.params.id})
        .then(course => {
            res.render('pages/course-detail', {
                course: course
            });
        })
        .catch(err => res.send(err));
}