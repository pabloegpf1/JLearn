const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const courseBlockItemSchema = require('./courseBlockItem.model');

const courseBlockSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    items: [courseBlockItemSchema]
});

module.exports = courseBlockSchema;
