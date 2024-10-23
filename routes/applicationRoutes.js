const express = require('express');
const { applyForJob, getApplicationsByUser } = require('../controller/applicationController');
const { authenticate } = require('../middleware/authMiddleware');
const router = express.Router();

// Apply for a job
router.post('/apply', authenticate, applyForJob);

// Get applications by user
router.get('/user', authenticate, getApplicationsByUser);

module.exports = router;
