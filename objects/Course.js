let Student = require('./Student')
let CourseBlock = require('./CourseBlock')

class Course {
    constructor({ title, subject, number, section, semester, students, blocks }) {
        this.title = title;
        this.subject = subject;
        this.number = number;
        this.section = section;
        this.semester = semester;
        this.studentsData = students;
        this.courseBlockData = blocks;

        this.studentList = []
        this.courseBlockList = []
        
        this.createUserList()
        console.log(this.studentsData)
        //this.createBlockList()
    }

    createUserList() {
        this.studentList = this.studentData.map(
            ({ first_name, last_name, email }) => new Student(first_name, last_name, email)
        );
    }

    addStudentList(studentList) {
        this.studentList = studentList
    }

    createBlockList() {
        this.courseBlockList = this.courseBlockData.map(
            ({ title, description }) => new CourseBlock(title, description)
        );
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