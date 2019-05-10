const SubmissionQueries = require('../queries/SubmissionQueries');

module.exports.listSubmissionsForItem = (req, res) => {
    new SubmissionQueries.GetSubmissionsForGradebookItem(req.params.itemId)
        .then(submissions => {
            console.log(submissions)
            res.render('pages/profgradebook', {
                submissions: submissions
            })
        })
        .catch(err => res.send(err));
};

module.exports.addSubmissionForItem = (req, res) => {
    new SubmissionQueries.AddSubmissionsToGradebookItem(req.params.itemId, req.user._id)
        .then(() => {
            res.redirect('courses/' + req.params.id)
        })
        .catch(err => res.send(err));
};
