const CourseQueries = require('../queries/CourseQueries');
const UserQueries = require('../queries/UserQueries');
const Course = require('../objects/Course');
const Render = require('../objects/Render');
const RenderHomepage = require('../objects/RenderHomepage');

class RouteDefinition {
    constructor(route, endpoint) {
        this.route = route,
        this.endpoint = endpoint;
    }

    route() {
        return this.route;
    }

    endpoint() {
        return this.endpoint;
    }
}

const CourseRoutes = [ new ListRouteDefinition() ];

class ListRouteDefinition extends RouteDefinition {
    constructor() {
        super('/', this.list() );
    }

    list() {
        return ({ user: { _id: id } }, response ) => {
            new CourseQueries.FindCoursesForUser(id).execute()
                .then(courses =>
                    new HomepageRender(response, {
                        courses: courses.map(courseData => new Course(courseData))
                    }).render()
                )
                .catch(err => console.error(err));
        }
    }
}

const list = ({ user: { _id: id } }, response) => {
    new CourseQueries.FindCoursesForUser(id).execute()
        .then(courses => 
            new HomepageRender(response, { 
                courses: courses.map(courseData => new Course(courseData)) 
            }).render()
        )
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
        .then(course => res.render('pages/add-block', { course }))
        .catch(err => console.error(err));
}

const createCourseBlock = (req, res) => {
    if (Object.keys(req.body).length === 0) {
        return res.send(`Body required in POST request`);
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
        .then(course => {
            let studentList = Course.getS
            let courseObject = new Course(course)
            new Render(res, courseObject, 'pages/course-participants').render()
        })
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
