const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GradeBookItemSubmissionSchema = new Schema({
    gradeBookItem: {
        type: Schema.Types.ObjectId,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    files: {
        type: Array,
        default: []
    }
});

const GradeBookItemSubmission = mongoose.model(`GradeBookItemSubmission`, GradeBookItemSubmissionSchema);
module.exports = GradeBookItemSubmission;
