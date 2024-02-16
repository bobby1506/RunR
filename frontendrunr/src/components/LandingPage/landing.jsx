import React from 'react';
import './landing.css';
import Head from '../../assets/h.png';

const Landing = () => {
  const spikeStyle = {
    '--i': '1',
  };

  const spikeArray = Array.from({ length: 24 }, (_, i) => i + 1);

  return (
    <div className="main_page">
      <div className="img_head">
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
