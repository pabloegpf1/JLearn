const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    color: {
        type: String,
    }
});

const Event = mongoose.model(`Event`, eventSchema);
module.exports = Event;