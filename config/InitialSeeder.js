const mongoose = require('mongoose')
const random = require('random-words')

const User = require('../models/User.model');


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
let newStudentCount = 100;
let newProfessorCount = 2;
let nextFirstName = '';


let newUsers = [];


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
  .then(function (mongooseDocuments) {

  })
  .catch(function (err) {
    console.log(err);
  });