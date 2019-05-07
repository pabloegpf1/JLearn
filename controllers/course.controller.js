var mongoose = require('mongoose');

const Course = require('../models/course.model');

module.exports.list = (req, res) => {
    Course.find({
            $or: [{
                students: req.user._id
            }, {
                professor: req.user._id
            }]
        })
        .then(courses => {
            res.render('pages/ilearn-homepage', {
                courses: courses
            });
        })
        .catch(err => res.send(err));
};

module.exports.detail = (req, res) => {
    Course.find({
            _id: req.params.id,
            $or: [{
                students: req.user._id
            }, {
                professor: req.user._id
            }]
        }).limit(1)
        .then(course => {
            console.log(course)
            res.render('pages/course-detail', {
                course: course,
                isProfessor: course[0].professor == req.user._id
            });
        })
        .catch(err => res.send(err));
};

// GET - add new block
module.exports.addNewBlock = (req, res) => {
    Course.find({
            _id: req.params.id,
            $or: [{
                students: req.user._id
            }, {
                professor: req.user._id
            }]
        }).limit(1)
        .then(course => {
            res.render('pages/add-block', {
                course: course,
                isProfessor: course[0].professor == req.user._id
            })
        })
        .catch(err => res.send(err));
}

module.exports.addBlock = (req, res) => {
    Course.find({
            id: req.params.id,
            $or: [{
                students: req.user.id
            }, {
                professor: req.user.id
            }]
        }).limit(1)
        .then(course => {
            // add course block here (POST request)
            // more on sub-documents here: https://mongoosejs.com/docs/subdocs.html
            course[0].blocks.create({
                title: req.body.title,
                description: req.body.description,
                files: []
            });
            course[0].save()
                .then(() => {})
                .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
};

module.exports.editBlock = (req, res) => {
    Course.find({
            id: req.params.id,
            $or: [{
                students: req.user.id
            }, {
                professor: req.user.id
            }]
        }).limit(1)
        .then(course => {
            course[0].blocks.update({
                title: req.body.title,
                description: req.body.description,
                files: []
            });
            course[0].save();
        })
        .catch(err => console.error(err));
}

module.exports.deleteBlock = (req, res) => {
    Course.find({
        id: req.params.id,
        $or: [{
            students: req.user.id
        }, {
            professor: req.user.id
        }]
    }).limit(1)
    .then(course => {
        course[0].blocks.delete({
            title: req.body.title,
            description: req.body.description,
            files: []
        });
        course[0].save();
    })
    .catch(err => console.error(err));
};

module.exports.particpants = (req, res) => {
    Course.find({
            id: req.params.id,
            $or: [{
                students: req.user.id
            }, {
                professor: req.user.id
            }]
        }).limit(1)
        .then(course => {
            res.render('pages/course-particpants', {
                course: course,
                students: course.students
            });
        })
        .catch(err => res.send(err));
};