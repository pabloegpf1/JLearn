const mongoose = require('mongoose')
const random = require('random-words')

const Student = require('../models/Student.model');
const Professor = require('../models/Professor.model');
			
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
let nextFirstName='';


let newStudents=[];
let majorDepartments=['physics', 'math' , 'art']
let totalMajorDepartment = majorDepartments.length-1;

let newProfessors = [];
let profRoles = ['LECTURER', 'TENURED', 'NON_TENURED'];
let totalRoles = profRoles.length-1;

//create "newStudentCount" many new students
[...Array(newStudentCount)].forEach((_, i) => {
  
  nextFirstName = random()+i; //ensure uniqueness in name and email
  nextId = nextId+1;

  newStudents.push(
    new Student({
      sfsu_id: nextId,
      first_name: nextFirstName,
	  last_name: random(),
	  email: nextFirstName+'@mail.sfsu.edu',
	  password: nextFirstName+'123',
	  major: majorDepartments[Math.floor(Math.random() * totalMajorDepartment)], //select random element from majors array
    })  	
  );
});


//create "newProfessorCount" many new professors
[...Array(newProfessorCount)].forEach((_, i) => {
  
  nextFirstName = random()+i;
  nextId = nextId+1;

  newProfessors.push(
    new Professor({
      sfsu_id: nextId,
      first_name: nextFirstName,
	  last_name: random(),
	  email: nextFirstName+'@mail.sfsu.edu',
	  password: nextFirstName+'123',
	  role: profRoles[Math.floor(Math.random() * totalRoles)],
	  department: majorDepartments[Math.floor(Math.random() * totalMajorDepartment)],
	  
    })  	
  );
});


//save the student and professors to the database

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