const Media = require('../models/mediaModel');

// Controller function to create a media post
exports.createMedia = async (req, res) => {
  try {
    // Extract data from the request body
    const { heading, data, link, image } = req.body;

    // Create a new media instance
    const newMedia = new Media({
      heading,
      data,
      link,
      image,
    });

    // Save the media instance to the database
    await newMedia.save();

    res.status(201).json({ message: 'Media post created successfully', media: newMedia });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateMediaDetails = async (req, res) => {
    const { id } = req.params; // Assuming you have an 'id' parameter in the route
    const { heading, data, link, image } = req.body;
  
    try {
      // Find the media post by ID
      const media = await Media.findById(id);
  
      // Check if the media post exists
      if (!media) {
        return res.status(404).json({ error: 'Media post not found' });
      }
  
      // Update the details
      media.heading = heading;
      media.data = data;
      media.link = link;
      media.image = image;
  
      // Save the updated media post
      await media.save();
  
      // Respond with the updated media post
      res.json(media);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

exports.getAllMedia = async (req, res) => {
    try {
      // Find all media posts
      const allMedia = await Media.find();
  
      // Respond with the array of media posts
      res.json(allMedia);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
