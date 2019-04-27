const Course = require('../models/course.model');

module.exports.list = (req, res) => {
    Course.find()
        .then(courses => {
            res.render('pages/ilearn-homepage', {
                courses: courses
            });
        })
        .catch(err => res.send(err));
}

module.exports.detail = (req, res) => {
    Course.findOne({
            id: req.params.id,
            $or: [{
                students: req.user.id
            }, {
                professor: req.user.id
            }]
        })
        .then(course => {
            res.render('pages/course-detail', {
                course: course
            });
        })
        .catch(err => res.send(err));
}

module.exports.addBlock = (req, res) => {
    Course.findOne({
        id: req.params.id,
        $or: [{
            students: req.user.id
        }, {
            professor: req.user.id
        }]
    })
    .then(course => {
        // add course block here (POST request)
        // more on sub-documents here: https://mongoosejs.com/docs/subdocs.html
        course.blocks.push({
            title: 'COURSE BLOCK TITLE',
            description: 'COURSE BLOCK DESCRIPTION',
            files: []
        })
    })
    .catch(err => res.send(err));
}