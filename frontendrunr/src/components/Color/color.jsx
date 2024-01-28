import React, { useEffect, useState } from 'react';
import './color.css'; // Import your CSS file
import AOS from 'aos';
import RunRfinal from "../../assets/RunRFinal.png"
import OrangeImage from '../../assets/orangee.png';
import WhiteImage from '../../assets/Whitee.png';
import BlackImage from '../../assets/Blackk.png';
import GreyImage from '../../assets/Greyy.png';
import GreenImage from '../../assets/Greenn.png';

const Color = () => {
  const [selectedColor, setSelectedColor] = useState('Orange');

  useEffect(() => {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }, []);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const getColorImage = () => {
    switch (selectedColor) {
      case 'White':
        return WhiteImage;
      case 'Black':
        return BlackImage;
      case 'Orange':
        return OrangeImage;
      case 'Grey':
        return GreyImage;
      case 'Green':
        return GreenImage;
      default:
        return OrangeImage; // Default to Orange
    }
  };

  return (
    <div className="main_color_div">
      <div className="blacks-container">
        <div className="white-box left-box">
          <div className="green_evvehicle">
            <img
              src={getColorImage()}
              alt=""
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            />
          </div>
          {/* Circles */}
          <div className="circle_main">
            <div className={`circle white ${selectedColor === 'White' ? 'selected' : ''}`} onClick={() => handleColorChange('White')}></div>
            <div className={`circle black ${selectedColor === 'Black' ? 'selected' : ''}`} onClick={() => handleColorChange('Black')}></div>
            <div className={`circle orange ${selectedColor === 'Orange' ? 'selected' : ''}`} onClick={() => handleColorChange('Orange')}></div>
            <div className={`circle grey ${selectedColor === 'Grey' ? 'selected' : ''}`} onClick={() => handleColorChange('Grey')}></div>
            <div className={`circle green ${selectedColor === 'Green' ? 'selected' : ''}`} onClick={() => handleColorChange('Green')}></div>
          </div>
        </div>
        <div className="content-details right-box">
          <div className="main_content_color">
            <h2>STUNNING COLORS THAT'LL <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KEEP YOUR EYES GLUED!</h2>
          </div>
        </div>
      </div>
      <div className="lower_heading">
        <h3>"Discover Top-of-the-Line Features for Your #StopNot Journey an <span>#DesignedToSpendSmart</span> Experience."</h3>
      </div>
      <div className="logo_part">
        <div className="logos">
          <div className="left_image">
            <img src={RunRfinal} alt="" />
          </div>
          <div className="right_image">
            <img src={RunRfinal} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Color;
