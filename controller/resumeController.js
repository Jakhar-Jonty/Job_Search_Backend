const Resume = require('../model/ResumeModel');

// Upload or update resume
exports.uploadResume = async (req, res) => {
    const { resumeLink } = req.body;
    try {
        const existingResume = await Resume.findOne({ user: req.user.id });
        if (existingResume) {
            existingResume.resumeLink = resumeLink;
            await existingResume.save();
            return res.status(200).json(existingResume);
        }
        const newResume = new Resume({
            user: req.user.id,
            resumeLink
        });
        await newResume.save();
        res.status(201).json(newResume);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
