const Course = require('../../models/course.model');

class AddCourseBlock {
    constructor(course, title, description) {
        this.course = course;
        this.title = title;
        this.description = description;
    }
    
    execute() {
        this.course.blocks.push({
            title: this.title,
            description: this.description
        });
        return this.course.save();
    }
}

module.exports = AddCourseBlock;