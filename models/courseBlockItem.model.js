const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseBlockItemSchema = new Schema({
    title: {
        type: String
    },
    files: []
});

module.exports = courseBlockItemSchema;