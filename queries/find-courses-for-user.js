const Course = require('../models/course.model');

/* "Strategy" pattern
class FindCoursesForUser {
  constructor({ id }) {
    this.id = id;
  }

  execute() {
    return Course.find({ $or: [{ students: this.id }, { professor: this.id }] })
  }
}

module.exports.FindCoursesForUser;