const CourseQueries = require('../queries/CourseQueries');

const list = (req, res) => {
    new CourseQueries.FindCoursesForUser(req.user._id).execute()
        .then(courses => res.render('pages/homepage', { courses }))
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
    new CourseQueries.getCourseFromId(req.params.id, req.user._id).execute()
    .then(course => res.render('pages/add-block', {course}))
    .catch(err => console.error(err));
}

const createCourseBlock = (req, res) => {
    if (Object.keys(req.body).length === 0) {
        return res.send(`Body required in POST requset`);
    }
    new CourseQueries.getCourseFromId(req.params.id, req.user._id).execute()
        .then(course => {
            new CourseQueries.AddCourseBlocks(
                course, req.body.title, req.body.description).execute()
                .then(() => res.redirect(`/courses/${course.id}`))
                .catch(err => console.error(`ERR CREATING COURSE LBOCK: ${err}`));
        })
        .catch(err => console.error(err));
};

const courseBlockDetail = (req, res) => {
    res.send(`GET course block detail...`);
}

const courseBlockEdit = (req, res) => {
    res.send(`PUT course block detail...`);
}

const courseBlockDelete = (req, res) => {
    res.send(`DELETE course block detail`);
}

const participants = (req, res) => {
    new CourseQueries.getCourseFromId(req.params.id, req.user._id).execute()
    .then(course => res.render('pages/course-participants', {
        course: course,
        students: course.students,
    }))
    .catch(err => console.error(err));
};

module.exports = { 
    list, 
    detail, 
    addBlock, 
    createCourseBlock, 
    courseBlockDetail, 
    courseBlockEdit,
    courseBlockDelete,
    participants 
};
