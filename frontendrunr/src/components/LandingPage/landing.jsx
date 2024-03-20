import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

const Landing = () => {
  const spikeStyle = {
    '--i': '1',
  };

  const spikeArray = Array.from({ length: 24 }, (_, i) => i + 1);

  return (
    <div className="main_page">
     
      <div className="img_head">
      <div className="book_button">
          {/* <Link to="/book"> */}
          <button>BOOK NOW</button>
          {/* </Link> */}
        </div>
        <img src="https://res.cloudinary.com/dlf8u5l7a/image/upload/v1707755685/runr/rmmdfo4xojsahd3bnriy.png" alt="" />
        
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
