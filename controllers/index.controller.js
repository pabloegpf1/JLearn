const Course = require('../models/course.model')

module.exports.list = (req, res) => {
	Course.find({})
		.then((courses) => res
			.render('pages/ilearn-homepage', {
				courses: courses
			})
		)
		.catch((err) => {
			console.log(err)
		})
}
