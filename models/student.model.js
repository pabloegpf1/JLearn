const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = require('./user.model');

const studentSchema = new Schema({
    ...userSchema,
    major: {
        type: String,
        required: true
    },

});

const Student = mongoose.model(`Student`, studentSchema);
module.exports = Student;
