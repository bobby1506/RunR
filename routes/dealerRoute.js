// routes/dealershipRoutes.js

const express = require('express');
const router = express.Router();
const dealershipController = require('../controllers/dealerController');

// Route to save form data
router.post('/save', dealershipController.saveDealershipData);

module.exports = router;
