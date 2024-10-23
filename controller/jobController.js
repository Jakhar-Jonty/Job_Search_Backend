const Job = require('../model/JobModel');

// Create a new job
exports.createJob = async (req, res) => {
    const { title, description, company, location, salary } = req.body;
    try {
        const newJob = new Job({
            title,
            description,
            company,
            location,
            salary,
            postedBy: req.user.id
        });
        await newJob.save();
        res.status(201).json(newJob);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all jobs
exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find().populate('postedBy', 'name');
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get job by ID
exports.getJobById = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id).populate('postedBy', 'name');
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json(job);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
