const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    subject: {
        type: String,
        required: true
    },
    courseNumber: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    students: []
})

const Course = mongoose.model(`Course`, courseSchema);
module.exports = Course;