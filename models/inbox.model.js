const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inboxSchema = new Schema({
    sender: {
        type: String,
        required: true,
    },
    receiver: {
        type: String,
        required: true,
    },
    chat:[],
    
});

const Inbox = mongoose.model(`Inbox`, inboxSchema);
module.exports = Inbox;