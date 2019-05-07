const Submission = require('../models/gradeBookItemSubmission.model');

module.exports.listSubmissionsForItem = (req, res) => {
    Submission.find({ gradeBookItem: req.params.id })
        .populate('gradebook')
        .limit(1)
        .then(submissions => {
            res.render('pages/profgradebook', {
                submissions: submissions
            })
        })
        .catch(err => res.send(err));
};

module.exports.addSubmissionForItem = (req, res) => {
    Submission.create({
        gradeBookItem: req.params.submissionId,
        user: req.user._id
        //files: 
    });
};
