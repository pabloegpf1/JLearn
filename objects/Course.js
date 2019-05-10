let Student = require('./Student')
let CourseBlock = require('./CourseBlock')

class Course {
    constructor(data) {
        this.title = data.title;
        this.subject = data.subject;
        this.number = data.number;
        this.section = data.section;
        this.semester = data.semester;
        this.studentsData = data.students;
        this.courseBlockData = data.blocks;
        this.studentList = []
        this.courseBlockList = []
        this.createUserList()
        console.log(this.studentsData)
        //this.createBlockList()
    }

    createUserList() {
        for (let student in this.studentData) {
            console.log(student)
            student = new Student(student.first_name, student.last_name, student.email)
            this.studentList.push(student)
        }
    }

    createBlockList() {
        for (let courseBlock in this.courseBlockData) {
            let block = new CourseBlock(courseBlock.title, courseBlock.description)
            this.courseBlockList.push(block)
        }
    }

    toJson() {
        return {
            course: {
                title: this.title,
                courseBlocks: this.courseBlockList
            },
            students: this.studentList
        }
    }

}

module.exports = Course