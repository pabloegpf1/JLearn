const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = require('./user.model');

const professorSchema = new Schema({
    ...userSchema,
    role: {
        type: String,
        required: true,
        enum: ['LECTURER', 'TENURED', 'NON_TENURED'],
        default: 'LECTURER'
    },
    department: {
        type: String,
        required: true
    }
});

const Professor = mongoose.model(`Professor`, professorSchema);
module.exports = Professor;
