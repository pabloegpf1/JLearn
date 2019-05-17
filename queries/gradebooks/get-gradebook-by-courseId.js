const GradeBook = require('../../models/gradeBook.model');

class GetGradebookByCourseId {
    constructor(courseId, userId) {
        this.courseId = courseId;
        this.userId = userId;
    }
    execute() {
        return GradeBook
            .findOne({ course: this.courseId })
            .populate('course')
    }
}

module.exports = GetGradebookByCourseId;