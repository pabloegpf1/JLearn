const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const courseBlockSchema = require('./courseBlock.model');

const courseSchema = new Schema({
    semester: {
        type: String,
        required: true,
        enum: ['FALL', 'WINTER', 'SPRING', 'SUMMER'],
        default: 'FALL'
    },
    subject: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    section: {
        type: Number,
        required: true
    },
    blocks: [courseBlockSchema],
    students: {
        type: Array,
        default: []
    },
    professor: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Course = mongoose.model(`Course`, courseSchema);
module.exports = Course;
