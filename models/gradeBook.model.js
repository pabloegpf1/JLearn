const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const GradeBookItem = require('./gradeBookItem.model');
const Course = require('./course.model');

const GradeBookSchema = new Schema({
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    items: [GradeBookItem]
});

const GradeBook = mongoose.model(`gradeBook`, GradeBookSchema);
module.exports = GradeBook;
