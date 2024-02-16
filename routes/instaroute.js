// routes/dealershipRoutes.js

const express = require('express');
const router = express.Router();
const instacontroller = require('../controllers/instaurl');

// Route to save form data
router.post('/getinstaurl', instacontroller.sendurl);

module.exports = router;
