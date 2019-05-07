const Course = require('../models/course.model');

class FindCoursesForUser {
  constructor(userId) {
    this.userId = userId;
  }

  execute() {
    console.log(this.userId)
    return Course.find({ $or: [{ students: this.userId }, { professor: this.userId }] })
  }
}

class GetCourseBlocks {
  constructor(courseId, userId) {
    this.courseId = courseId;
    this.userId = userId;
  }

  execute() {
    return Course.find({ _id: this.courseId, $or: [{ students: this.userId }, { professor: this.userId }] })
  }
}

class getCourseFromId {
  constructor(courseId, userId) {
    this.courseId = courseId;
    this.userId = userId;
  }

  execute() {
    return Course.find({ _id: req.params.id, $or: [{ students: req.user.id }, { professor: req.user.id }] })
  }
}

class AddCourseBlocks {
  constructor(course) {
    this.course = course;
  }

  execute() {
    course.blocks.create({
      title: req.body.title,
      description: req.body.description,
      files: []
    });
    return course.save()
      .then(() => { })
      .catch(err => console.error(err));
  }
}

module.exports = {
  FindCoursesForUser,
  GetCourseBlocks,
  getCourseFromId,
  AddCourseBlocks,
  GetCourseParticipants: require('./courses/get-course-participants')
}