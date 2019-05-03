const Course = require('../models/course.model')

module.exports.list = (req, res) => {
	if (!req.user) {
		res.redirect('/login')
	}
	Course.find({ $or: [{ students: req.user_id }, { professor: req.user_id }] })
		.then((courses) => res
			.render('pages/ilearn-homepage', {
				courses: courses
			})
		)
		.catch((err) => {
			console.log(err)
		})
}
