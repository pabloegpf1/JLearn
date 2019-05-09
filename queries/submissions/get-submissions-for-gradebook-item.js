const Submission = require('../../models/gradeBookItemSubmission.model');

class GetSubmissionsForGradebookItem {
    constructor(gradebookItemId, userId) {
        this.gradebookItemId = gradebookItemId;
        this.userId = userId;
    }
    execute() {
        return Submission
            .find({ gradeBookItem: this.gradebookItemId })
            .populate('gradebook')
    }
}

module.exports = GetSubmissionsForGradebookItem;