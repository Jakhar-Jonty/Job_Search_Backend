const express = require('express');
const { uploadResume } = require('../controller/resumeController');
const {authenticate}  = require('../middleware/authMiddleware')
const router = express.Router();

// Upload or update resume
router.post('/upload', authenticate, uploadResume);

module.exports = router;
