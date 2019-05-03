const dotenv = require('dotenv')
const mongoose = require('mongoose')
const random = require('random-words')
const User = require('../models/User.model');
const Courses = require('../models/Course.model');

mongoose
  .connect(
    `mongodb+srv://JLearn:${process.env.DB_PASSWORD}@ilearnclone-lgvzf.gcp.mongodb.net/test?retryWrites=true`,
    {
      useNewUrlParser: true
    }
  )
  .then(() => console.log(`MongoDB connection successful`))
  .catch((err) => {
    console.log(`MongoDB password: ${process.env.DB_PASSWORD}. Export env variable with DB_PASSWORD before running the script`)
    console.log(`MongoDB connection error: ${err}`)
    createError(500)
  });

let nextId = 900000000;
let nextFirstName = '';

let newStudentCount = 100;
let newProfessorCount = 2;

let newUsers = [];
let newCourses = [];

User.deleteMany({}, createUsers)

function createUsers() {
  //new students
  [...Array(newStudentCount)].forEach((_, i) => {

    nextFirstName = random() + i; //ensure uniqueness in name and email
    nextId = nextId + 1;

    newUsers.push(
      new User({
        sfsu_id: nextId,
        first_name: nextFirstName,
        last_name: random(),
        email: nextFirstName + '@mail.sfsu.edu',
        password: nextFirstName + '123',
      })
    );
  });

  //new prof
  [...Array(newProfessorCount)].forEach((_, i) => {

    nextFirstName = random() + i; //ensure uniqueness in name and email
    nextId = nextId + 1;

    newUsers.push(
      new User({
        sfsu_id: nextId,
        first_name: nextFirstName,
        last_name: random(),
        email: nextFirstName + '@mail.sfsu.edu',
        password: nextFirstName + '123',
      })
    );
  });

  //save the student and professors to the database
  User.insertMany(newUsers)
    .then(function (users) {
      Courses.deleteMany({}, () => {
        console.log("inserted " + users.length + " Students")
        assignToCourses(users)
      })
    })
    .catch(function (err) {
      console.log(err);
    });
}

function assignToCourses(users) {
  newCourses = [
    {
      semester: "FALL",
      subject: "CSC",
      number: 667,
      title: "Internet app dev. and Des.",
      section: 1,
      students: [
        users[2]._id,
        users[3]._id,
        users[4]._id,
        users[5]._id,
        users[6]._id,
        users[7]._id,
        users[8]._id,
        users[9]._id,
        users[10]._id,
      ],
      professor: users[0]._id
    },
    {
      semester: "WINTER",
      subject: "CSC",
      number: 668,
      title: "Advanced Object Oriented Dev.and Des.",
      section: 1,
      students: [
        users[12]._id,
        users[13]._id,
        users[14]._id,
        users[15]._id,
        users[16]._id,
        users[17]._id,
        users[18]._id,
        users[19]._id,
        users[20]._id,
      ],
      professor: users[0]._id
    },
    {
      semester: "SPRING",
      subject: "MKTG",
      number: 632,
      title: "Marketing Research",
      section: 1,
      students: [
        users[22]._id,
        users[23]._id,
        users[24]._id,
        users[25]._id,
        users[26]._id,
        users[27]._id,
        users[28]._id,
        users[29]._id,
        users[30]._id,
      ],
      professor: users[0]._id
    },
    {
      semester: "SUMMER",
      subject: "IBUS",
      number: 690,
      title: "Global Strategic Management",
      section: 1,
      students: [
        users[32]._id,
        users[33]._id,
        users[34]._id,
        users[35]._id,
        users[36]._id,
        users[37]._id,
        users[38]._id,
        users[39]._id,
        users[40]._id,
      ],
      professor: users[0]._id
    },
    {
      semester: "FALL",
      subject: "CSC",
      number: 645,
      title: "Computer Networks",
      section: 1,
      students: [
        users[42]._id,
        users[43]._id,
        users[44]._id,
        users[45]._id,
        users[46]._id,
        users[47]._id,
        users[48]._id,
        users[49]._id,
        users[50]._id,
      ],
      professor: users[1]._id
    },
    {
      semester: "WINTER",
      subject: "FIN",
      number: 353,
      title: "Financial Institutions",
      section: 1,
      students: [
        users[52]._id,
        users[53]._id,
        users[54]._id,
        users[55]._id,
        users[56]._id,
        users[57]._id,
        users[58]._id,
        users[59]._id,
        users[60]._id,
      ],
      professor: users[1]._id
    },
    {
      semester: "SPRING",
      subject: "ACCT",
      number: 350,
      title: "Cost Accounting",
      section: 1,
      students: [
        users[62]._id,
        users[63]._id,
        users[64]._id,
        users[65]._id,
        users[66]._id,
        users[67]._id,
        users[68]._id,
        users[69]._id,
        users[70]._id,
      ],
      professor: users[1]._id
    },
  ];

  Courses.insertMany(newCourses)
    .then(function (courses) {
      console.log("Inserted " + courses.length + " Courses")
    })
    .catch(function (err) {
      console.log("Could not insert courses: " + err)
    });
}


