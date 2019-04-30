const Course = require('../models/course.model');

module.exports.list = (req, res) => {
    Course.find({ $or: [{ students: req.user._id }, { professor: req.user._id }] })
        .then(courses => {
            res.render('pages/ilearn-homepage', {
                courses: courses
            });
        })
        .catch(err => res.send(err));
};

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
                course: course,
            });
        })
        .catch(err => res.send(err));
};

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
            course.blocks.create({
                title: req.body.title,
                description: req.body.description,
                files: []
            });
            course.save()
                .then(() => {})
                .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
};

module.exports.particpants = (req, res) => {
    Course.findOne({
        id: req.params.id,
        $or: [{
            students: req.user.id
        }, {
            professor: req.user.id
        }]
    })
    .then(course => {
        res.render('pages/course-particpants', {
            course: course,
            students: course.students
        });
    })
    .catch(err => res.send(err));
};