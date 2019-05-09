const CourseQueries = require('../queries/CourseQueries');

module.exports.list = (req, res) => {
	new CourseQueries.FindCoursesForUser(req.user._id).execute()
		.then((courses) =>
			res.render('pages/homepage', {
				courses: courses
			})
		)
		.catch((err) => {
			console.log(err)
		})
}

