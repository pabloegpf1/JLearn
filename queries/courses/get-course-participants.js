class GetCourseParticipants {
  constructor(courseId, userId) {
    this.courseId = courseId;
    this.userId = userId;
  }

  execute() {
    return Course.find({
      id: courseId,
      $or: [{ students: userId }, { professor: userId }]
    })
      .limit(1)
      .then(course => ({
        course,
        students: course.students
      }))
  }
}

module.exports.GetCourseParticipants;