const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const courseBlockSchema = require('./courseBlock.model');
const User = require('./user.model');

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
    students: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    professor: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

// Get the Professor User Object for a Course
// Example of using this;
// Course.getProfessorUser((err, professor) => console.log(professor));
courseSchema.methods.getProfessorUser = function () {
    return User.findById(JSON.parse(this.professor), callback);
}

courseSchema.methods.getStudentObjects = function () {
    let promises = []
    for (let studentId in studentIdList) {
        promises.push(User.findById(studentId))
    }
    return Promise.all(promises)
}

// TODO: Remove; another option discussed
// courseSchema.methods.findByUser = userId => {
//     return Course.find(/* .... */);
// }

const Course = mongoose.model(`Course`, courseSchema);
module.exports = Course;
