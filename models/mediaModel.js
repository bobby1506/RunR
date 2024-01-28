const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Media = mongoose.model('Media', mediaSchema);

module.exports = Media;
