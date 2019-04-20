var random = require('random-words')
const mongoose = require('mongoose')

var User = require('../models/User.model')
var Student = require('../models/Student.model');
var Professor = require('../models/Professor.model');
			
mongoose
	.connect(
		`mongodb+srv://JLearn:lnw8qJ9pkS07ou6i@ilearnclone-lgvzf.gcp.mongodb.net/test?retryWrites=true`,
		{
			useNewUrlParser: true
		}
	)
	.then(() => console.log(`MongoDB connection successful`))
	.catch((err) => {
		console.log(`MongoDB connection error: ${err}`)
		createError(500)
	});



let nextId = 900000000;
let newStudentCount = 5000;
let newProfessorCount = 10;
let nextFirst='';


let newStudents=[];
let majorDepartments=['physics', 'math' , 'art']
let totalMajorDepartment = majorDepartments.length-1;

let newProfessors = [];
let profRoles = ['LECTURER', 'TENURED', 'NON_TENURED'];
let totalRoles = profRoles.length-1;

//create "newStudentCount" many new students
[...Array(newStudentCount)].forEach((_, i) => {
  
  nextFirst = random()+i; //ensure uniqueness in name and email
  
  newStudents.push(
    new Student({
      sfsu_id: nextId + i,
      first_name: nextFirst,
	  last_name: random(),
	  email: nextFirst+'@mail.sfsu.edu',
	  password: nextFirst+'123',
	  major: majorDepartments[Math.floor(Math.random() * totalMajorDepartment)], //select random element from majors array
    })  	
  );
});

//newProfessorCount
[...Array(newProfessorCount)].forEach((_, i) => {
  
  nextFirst = random()+i;
  
  newProfessors.push(
    new Professor({
      sfsu_id: nextId + i,
      first_name: nextFirst,
	  last_name: random(),
	  email: nextFirst+'@mail.sfsu.edu',
	  password: nextFirst+'123',
	  role: profRoles[Math.floor(Math.random() * totalRoles)],
	  department: majorDepartments[Math.floor(Math.random() * totalMajorDepartment)],
	  
    })  	
  );
});


Student.insertMany(newStudents)
	.then(function(mongooseDocuments) {
       
    })
    .catch(function(err) {
       console.log(err);
    });


Professor.insertMany(newProfessors)
	.then(function(mongooseDocuments) {
       mongoose.disconnect();
    })
    .catch(function(err) {
       console.log(err);
    });   