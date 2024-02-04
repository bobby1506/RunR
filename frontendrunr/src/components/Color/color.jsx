import React, { useEffect, useState } from 'react';
import './color.css';
import AOS from 'aos';
import RunRfinal from "../../assets/hs.png"
import RunRfinals from "../../assets/hsplus.png"
import WhiteF from "../../assets/frontw.png"
import WhiteL from "../../assets/leftw.png"
import WhiteR from "../../assets/rightw.png"
import GreenF from "../../assets/frontg.png"
import GreenL from "../../assets/leftg.png"
import GreenR from "../../assets/rightg.png"
import GreyF from "../../assets/frontgr.png"
import GreyL from "../../assets/leftgr.png"
import GreyR from "../../assets/rightgr.png"
import OrangeF from "../../assets/fronto.png"
import OrangeL from "../../assets/lefto.png"
import OrangeR from "../../assets/righto.png"
import BlackF from "../../assets/frontb.png"
import BlackL from "../../assets/leftb.png"
import BlackR from "../../assets/rightb.png"
import Heading from '../../Common/Headings/Heading';

const Color = () => {
  const [selectedColor, setSelectedColor] = useState('Orange');
  const [selectedColorRight, setSelectedColorRight] = useState('OrangeR');
  const [selectedColorLeft, setSelectedColorLeft] = useState('OrangeL');
  useEffect(() => {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }, []);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setSelectedColorLeft(color);
    setSelectedColorRight(color);
  };

  const getColorImage = () => {
    switch (selectedColor) {
      case 'White':
        return WhiteF;
      case 'Black':
        return BlackF;
      case 'Orange':
        return OrangeF;
      case 'Grey':
        return GreyF;
      case 'Green':
        return GreenF;
      default:
        return OrangeF; // Default to Orange
    }
  };

  const getColorLeftImage = () => {
    switch (selectedColorLeft) {
      case 'White':
        return WhiteL;
      case 'Black':
        return BlackL;
      case 'Orange':
        return OrangeL;
      case 'Grey':
        return GreyL;
      case 'Green':
        return GreenL;
      default:
        return OrangeL; // Default to Orange
    }
  };
  const getColorRightImage = () => {
    switch (selectedColorRight) {
      case 'White':
        return WhiteR;
      case 'Black':
        return BlackR;
      case 'Orange':
        return OrangeR;
      case 'Grey':
        return GreyR;
      case 'Green':
        return GreenR;
      default:
        return OrangeR; // Default to Orange
    }
  };
  return (
    <div className="main_color_div">
      <div className="blacks-container">
        <div className="white-box left-box">
          <div className="green_evvehicle">
            <img
              src={getColorLeftImage()}
              alt=""
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            />
             <img
              src={getColorImage()}
              alt=""
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            />
             <img
              src={getColorRightImage()}
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
      </div>
<div className="main_head">
<div className="lower_heading">
        <h3>"Discover Top-of-the-Line Features for Your #StopNot Journey an <span>#DesignedToSpendSmart</span> Experience."</h3>
      </div>
</div>
      
      <div className="logo_part">
        <div className="logos">
          <div className="left_image">
            <img src={RunRfinal} alt="" />
          </div>
          <div className="right_image">
            <img src={RunRfinals} alt="" />
          </div>
        </div>
      </div>
      <div className="tables">
      <table className="container_table">
	<tbody>
		<tr>
			<td>Charge</td>
			<td>130km/charge</td>
			
		</tr>
		<tr>
			<td>Speed</td>
			<td>70 km/hour</td>

		</tr>
		<tr>
			<td>Batteries</td>
			<td>60 v 29 Ah*2Li-on swappable batteries with can based BMS</td>
		</tr>
    <tr>
			<td>Wheels</td>
			<td>Allow Wheels</td>
		</tr>
    <tr>
			<td>Motor</td>
			<td>1.5/2.9 kw peak power BLDC motor</td>
		</tr>
    <tr>
			<td>LED</td>
			<td>Luminous LED tail lights</td>	
		</tr>
    <tr>
			<td>Anti-theft Alarm</td>
			<td>Anti-theft alarm and device locator</td>
		</tr>
    <tr>
			<td>Clusture</td>
			<td>Digital Cluster</td>
		</tr>
	</tbody>
</table>
<table className="containers_table">
	<tbody>
  <tr>
			
			<td>100km/charge</td>
			
		</tr>
		<tr>
		
			<td>70 km/hour</td>

		</tr>
		<tr>
			
			<td>60 v 40 Ah*Li-on swappable batteries with can based BMS</td>
		</tr>
    <tr>
			
			<td>Allow Wheels</td>
		</tr>
    <tr>
			
			<td>1.5/2.9 kw peak power BLDC motor</td>
		</tr>
    <tr>
			
			<td>Luminous LED tail lights</td>	
		</tr>
    <tr>
		
			<td>Anti-theft alarm and device locator</td>
		</tr>
    <tr>
			
			<td>Digital Cluster</td>
		</tr>
	</tbody>
</table>
      </div>

      <div className="button_group">
      <Heading
            className="taleido_heading"
            id="glheading"
            title="BE A PART OF OUR R-MEE, today!"
          />
          <div className="buttons">
            <div className="left_part">
                <div className="content">
                  <div className="details">
                    <h4>STYLE, SAVINGS AND SUSTAINAIBILITY</h4>
                    <h4>FUSED-ONLY IN RUNR'S </h4>
                    <h4>E-SCOOTER!</h4>
                  </div>
                  <div className="book_now">
                     <button>BOOK NOW</button>
                  </div>
                </div>
            </div>
            <div className="separator"></div>
            <div className="right_part">
                <div className="content">
                  <div className="details">
                  <h4>OWN A BUSINESS THAT MAKES A</h4>
                    <h4>DIFFERENCE. BECOME A DEALER TODAY </h4>
                    <h4>AND PROMOTE ECO-FRIENDLY PRODUCTS</h4>
                  </div>
                  <div className="book_now">
                      <button>APPLY FOR DEALERSHIP</button>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Color;
