// routes/bookingRoutes.js

const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/testdriveController');

// Define a route for handling form submissions
router.post('/submit', bookingController.saveBookingDetails);

module.exports = router;
