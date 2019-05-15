const GradeBook = require('../../models/gradeBook.model');

class AddGradebookItem {
    constructor(gradebook, weight, maxpoints, duedate) {
        this.gradebook = gradebook;
        this.weight = weight;
        this.maxpoints = maxpoints;
        this.duedate = duedate;
    }

    execute() {
        this.gradebook.items.push({
            weight: this.weight,
            MaxPoints: this.maxpoints,
            DueDate: this.duedate
        });
        return this.gradebook.save();
    }
}

module.exports = AddGradebookItem;