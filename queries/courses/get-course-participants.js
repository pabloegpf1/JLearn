const Course = require('../../models/course.model');

class GetCourseParticipants {
  constructor(courseId, userId) {
    this.courseId = courseId;
    this.userId = userId;
  }

  execute() {
    return Course.find({
        id: this.courseId,
        $or: [{
          students: this.userId
        }, {
          professor: this.userId
        }]
      })
  }
}

module.exports = GetCourseParticipants;