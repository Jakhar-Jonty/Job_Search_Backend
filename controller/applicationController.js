const Application = require('../model/ApplicationModel');

// Apply for a job
exports.applyForJob = async (req, res) => {
    const { jobId } = req.body;
    try {
        const newApplication = new Application({
            job: jobId,
            applicant: req.user.id
        });
        await newApplication.save();
        res.status(201).json(newApplication);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
// Get applications by user
exports.getApplicationsByUser = async (req, res) => {
    try {
        const applications = await Application.find({ applicant: req.user.id })
            .populate('job', 'title company');
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
