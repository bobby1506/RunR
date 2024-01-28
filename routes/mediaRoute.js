// routes/mediaRoutes.js

const express = require('express');
const router = express.Router();
const mediaController = require('../controllers/mediaController');

// Create a new media post
router.post('/media/create', mediaController.createMedia);

// Update a media post
router.put('/media/update/:id', mediaController.updateMediaDetails);

// Get all media posts
router.get('/media/getAll', mediaController.getAllMedia);

module.exports = router;
