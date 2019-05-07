const CourseQueries = require('../queries/CourseQueries');

const list = (req, res) => {
    new CourseQueries.FindCoursesForUser(req.user._id).execute()
        .then(courses => res.render('pages/ilearn-homepage', { courses }))
        .catch(err => console.error(err));
};

const detail = (req, res) => {
    new CourseQueries.getCourseFromId(req.params.id, req.user._id).execute()
        .then(course => res.render('pages/course-detail', {
            course: course,
            isProfessor: course.professor == req.user._id
        }))
        .catch(err => console.error(err));
};

const addBlock = (req, res) => {
    new CourseQueries.GetCourseById(req.params.id, req.user._id).execute()
        .then(course => {
            new CourseQueries.AddCourseBlocks(course).execute()
        })
        .catch(err => console.error(err));
};

const participants = (req, res) => {
    new CourseQueries.getCourseFromId(req.params.id, req.user._id).execute()
    .then(course => res.render('pages/course-participants', {
        course: course,
        students: course.students,
    }))
    .catch(err => console.error(err));
};

module.exports = { list, detail, addBlock, participants };