const Course = require('../models/course.model')

module.exports.list = (req, res) => {
	if (!req.user) {
		res.redirect('/login')
	}
	Course.find({ $or: [{ students: req.user._id }, { professor: req.user._id }] })
		.then((courses) => res
			.render('pages/homepage', {
				courses: courses
			})
		)
		.catch((err) => {
			console.log(err)
		})
}
