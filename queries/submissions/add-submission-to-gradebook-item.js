const Submission = require('../../models/gradeBookItemSubmission.model');

class AddSubmissionsToGradebookItem {
    constructor(gradeBookItemId, userId) {
        this.gradeBookItemId = gradeBookItemId;
        this.userId = userId;
    }
    execute() {
        return Submission.create({
            gradeBookItem: this.gradeBookItemId,
            user: this.userId
            //files: 
        });
    }
}

module.exports = AddSubmissionsToGradebookItem;