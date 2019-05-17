const Course = require('../../models/course.model');

class GetCourseById {
    constructor(courseId, userId) {
        this.courseId = courseId;
        this.userId = userId;
    }

    execute() {
        return Course.findOne({
            _id: this.courseId,
            $or: [{
                students: this.userId
            }, {
                professor: this.userId
            }]
        });
    }
}

module.exports = GetCourseById;