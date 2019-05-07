const Course = require('../../models/course.model');

class FindCoursesForUser {
    constructor(userId) {
        this.userId = userId;
    }

    execute() {
        return Course.find({
            $or: [{
                students: this.userId
            }, {
                professor: this.userId
            }]
        });
    }
}

module.exports = FindCoursesForUser;