const CourseQueries = require('../queries/CourseQueries');

const list = (req, res) => {
    new CourseQueries.FindCoursesForUser(req.user._id).execute()
        .then(courses => {
            res.render('pages/ilearn-homepage', { courses })
        })
        .catch(error => res.send(error));
};

const detail = (req, res) => {
    new CourseQueries.GetCourseBlocks(req.params.id, req.user._id).execute()
        .then((course) => {
            res.render('pages/course-detail', {
                course: course,
                isProfessor: course[0].professor == req.user._id
            });
        })
        .catch(err => res.send(err));
};

const addBlock = (req, res) => {
    new CourseQueries.GetCourseById(req.params.id, req.user._id).execute()
        .then(course => {
            new CourseQueries.AddCourseBlocks(course).execute()
        })
        .catch(err => console.error(err));
};

const participants = (req, res) => {
    new CourseQueries.GetCourseParticipants(req.params.id, req.user._id).execute()
        .then(data => res.render('pages/course-particpants', data))
        .catch(err => res.send(err));
};

module.exports = { list, detail, addBlock, participants };