// models/Booking.js

const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  number: {
    type: String, // Assuming it's a string since it's a mobile number
    required: true,
  },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
