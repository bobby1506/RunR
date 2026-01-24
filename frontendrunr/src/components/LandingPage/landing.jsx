import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';
import landingImage from '../../assets/main.png';

const Landing = () => {
  const spikeStyle = {
    '--i': '1',
  };

  const spikeArray = Array.from({ length: 24 }, (_, i) => i + 1);

  return (
    <div className="main_page">
     
      <div className="img_head">
        <div className="hero_text">
          <h1 className="hero_title">
            <span className="line1">INDIA'S MOST</span>
            <span className="line2">AFFORDABLE AND SAFEST</span>
            <span className="line3">E-SCOOTER.</span>
          </h1>
          <div className="book_button">
            <Link to="/testdrive">
              <button>BOOK NOW</button>
            </Link>
          </div>
        </div>
        <img src={landingImage} alt="" />
        
        </div>
       
        <div className="chakra">
          
          <div className="spikes">
            {spikeArray.map((i) => (
              <div
                key={i}
                className="spike"
                style={{ '--i': i.toString() }}
              ></div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Landing;
