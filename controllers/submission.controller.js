const SubmissionQueries = require('../queries/SubmissionQueries');

module.exports.listSubmissionsForItem = (req, res) => {
    new SubmissionQueries.GetSubmissionsForGradebookItem(req.params.id)
        .then(submissions => {
            res.render('pages/profgradebook', {
                submissions: submissions
            })
        })
        .catch(err => res.send(err));
};

module.exports.addSubmissionForItem = (req, res) => {
    new SubmissionQueries.AddSubmissionsToGradebookItem(req.params.submissionId, req.user._id)
        .then(() => {
            res.redirect('courses/' + req.params.id)
        })
        .catch(err => res.send(err));
};
