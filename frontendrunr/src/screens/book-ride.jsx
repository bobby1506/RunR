import React, { useState } from 'react';
import axios from 'axios';
import './book-ride.css'; // Import your CSS file
import art from "../assets/art-1.png"
import SwappingSquaresSpinner from './loader';
const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    model: '',
    date: '',
    number: '',
  });

  const [loading, setLoading] = useState(false); // Added loading state

  const config = {
    apiEndpoint: '/api/v1/submit', // Replace with your actual API endpoint
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true before making the request

    try {
      const response = await axios.post(config.apiEndpoint, formData);
      console.log(response.data);
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        city: '',
        model: '',
        date: '',
        number: '',
      }); // Clear the form data after successful submission
    } catch (error) {
      console.error('Error submitting form data:', error);
      alert('Error submitting form data. Please try again.');
    } finally {
      setLoading(false); // Set loading to false after the request is complete
    }
  };

  return (
    <>
    {loading ? (
      <SwappingSquaresSpinner />
    ) : (
    <div className="main_bg">
      <div className="form-container">
        <div className="form-text">
          <h1>
            <span>
              <img src={art} alt="" />
            </span>
            Book Your Drive{' '}
            <span>
              <img src={art} alt="" />
            </span>
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, fugit.</p>
        </div>
        <div className="main-form">
          <form onSubmit={handleSubmit}>
            <div>
              <span>Name</span>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Write your name here..."
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <span>Email</span>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Write your email here..."
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <span>City</span>
              <select
                name="city"
                id="city"
                value={formData.city}
                onChange={handleChange}
                required
              >
                <option value="">People</option>
                <option value="1">1 People</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
              </select>
            </div>
            <div>
              <span>Model</span>
              <select
                name="model"
                id="model"
                value={formData.model}
                onChange={handleChange}
                required
              >
                <option value="">People</option>
                <option value="1">1 People</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
              </select>
            </div>
           
            <div>
              <span>Date</span>
              <input
                type="date"
                name="date"
                id="date"
                placeholder="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <span>Mobile</span>
              <input
                type="number"
                name="number"
                id="number"
                placeholder="Write your number here..."
                value={formData.number}
                onChange={handleChange}
                required
              />
            </div>

            <div id="submit">
              {/* Disable the button when loading */}
              <input type="submit" value="SUBMIT" id="submit" disabled={loading} />
            </div>
          </form>
        </div>
      </div>
    </div>
    )
    }
    </>)
  };

export default BookingForm;
