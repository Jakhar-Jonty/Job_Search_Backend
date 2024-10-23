const express = require('express');
const { createJob, getAllJobs, getJobById } = require('../controller/jobController');
const  {authenticate}  = require('../middleware/authMiddleware');
const router = express.Router();

// Create a new job
router.post('/', authenticate, createJob);

// Get all jobs
router.get('/', getAllJobs);

// Get a job by ID
router.get('/:id', getJobById);

module.exports = router;
