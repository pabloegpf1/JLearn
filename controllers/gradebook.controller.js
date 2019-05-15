const GradebookQueries = require('../queries/GradebookQueries');

module.exports.list = (req, res) => {
    new GradebookQueries.GetGradebookByCourseId(req.params.id).execute()
        .then(gradebook => {
            res.render('pages/gradebook', {
                course: gradebook.course,
                items: gradebook.items
            })
        })
        .catch(err => console.error(err));
};

module.exports.addGradeItem = (req, res) => {
    new GradebookQueries.GetGradebookByCourseId(req.params.id).execute()
        .then(gradebook => {
            new GradebookQueries.AddGradebookItem(gradebook, req.params.weight, req.params.maxpoints, req.params.duedate).execute()
                .then(() => {
                    res.redirect('courses/' + req.params.id + '/gradebook')
                })
        })
        .catch(err => console.error(err));
};
