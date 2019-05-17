const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GradeBookItemSchema = new Schema({
    weight: {
        type: Number,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    MaxPoints: {
        type: Number,
        required: true
    }
});

//const GradeBookItem = mongoose.model(`GradeBookItem`, GradeBookItemSchema);
module.exports = GradeBookItemSchema;
