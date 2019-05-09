const Submission = require('../../models/gradeBookItemSubmission.model');

class AddSubmissionsToGradebookItem {
    constructor(submissionId, userId) {
        this.submissionId = submissionId;
        this.userId = userId;
    }
    execute() {
        return Submission.create({
            gradeBookItem: this.submissionId,
            user: this.userId
            //files: 
        });
    }
}

module.exports = AddSubmissionsToGradebookItem;