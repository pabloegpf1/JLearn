const Course = require('../models/course.model');

module.exports.list = (req, res) => {
    Course.find()
        .then(courses => res.send(courses))
        .catch(err => res.send(err));
}