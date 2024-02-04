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
        <img src={Head} alt="" />
       
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
