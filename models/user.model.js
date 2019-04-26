const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    sfsu_id: {
        type: Number,
        min: 900000000,
        max: 1000000000,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model(`User`, userSchema);
module.exports = User;