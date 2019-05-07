const Course = require('../models/course.model');
const FindCoursesForUser = require('../queries/find-courses-for-user');

const list = ({ user: { _id: id } }, response) => {
    new FindCoursesForUser(id).execute()
        .then(courses => {
            response.render('pages/ilearn-homepage', { courses })
        })
        .catch( error => response.send(error));
};

const detail = (req, res) => {
    Course.find({
        _id: req.params.id,
        $or: [{
            students: req.user._id
        }, {
            professor: req.user._id
        }]
    }).limit(1)
        .then(course => {
            //console.log(course)
            res.render('pages/course-detail', {
                course: course,
                isProfessor: course[0].professor == req.user._id
            });
        })
        .catch(err => res.send(err));
};

const addBlock = (req, res) => {
    Course.find({
        _id: req.params.id,
        $or: [{
            students: req.user.id
        }, {
            professor: req.user.id
        }]
    }).limit(1)
        .then(course => {
            // add course block here (POST request)
            // more on sub-documents here: https://mongoosejs.com/docs/subdocs.html
            course.blocks.create({
                title: req.body.title,
                description: req.body.description,
                files: []
            });
            course.save()
                .then(() => { })
                .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
};

const participants = (req, res) => {
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

module.exports = { list, detail, addBlock, participants };