const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseBlockSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    files: {
        type: Array,
        default: []
    }
});

module.exports = courseBlockSchema;
