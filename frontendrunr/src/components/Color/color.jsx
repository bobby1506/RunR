import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
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
import Charge from "../../assets/charge.png"
import Battery from "../../assets/battery.png"
import Clustre from "../../assets/clustre.png"
import Led from "../../assets/led.png"
import Motor from "../../assets/motor.png"
import Speed from "../../assets/speed.png"
import Wheels from "../../assets/wheels.png"
import AntiAlarm from "../../assets/antialarm.png"
import Heading from '../../Common/Headings/Heading';
import BookNow from '../../assets/1.jpeg';
import Dealer from "../../assets/2.jpg";
import Grey from "../../assets/orange.png";

const Color = () => {


  const [selectedColor, setSelectedColor] = useState('Orange');
  const [selectedColorRight, setSelectedColorRight] = useState('OrangeR');
  const [selectedColorLeft, setSelectedColorLeft] = useState('OrangeL');
  // Add these lines after your existing state declarations
const [isHovered, setIsHovered] = useState(false);
const [hoveredColor, setHoveredColor] = useState('');

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
        return OrangeF;
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
        return OrangeL;
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
        return OrangeR;
    }
  };

  const handleHover = (color) => {
    setIsHovered(!!color);
    setHoveredColor(color);
  };

  
  return (
    <div className="main_color_div">    
      <div className="blacks-container">
      <div className="head">
      <Heading
        className="taleido_heading"
        id="glheading"
        title="Explore the World with a Palette of 5 Stunning Colors!
        "
      />
      </div>
        <div className="white-box left-box">
     
          <img src="https://res.cloudinary.com/dlf8u5l7a/image/upload/v1707759757/runr/cyhtyjakcwzu8yg6h5vs.jpg" alt="" />
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
  <div className={`circle white ${selectedColor === 'White' ? 'selected' : ''}`} onMouseEnter={() => handleHover('Pebble White')} onMouseLeave={() => handleHover('')} onClick={() => handleColorChange('White')}>
    {selectedColor === 'White' && isHovered && <div className="hovering">{hoveredColor}</div>}
  </div>
  <div className={`circle black ${selectedColor === 'Black' ? 'selected' : ''}`} onMouseEnter={() => handleHover('Midnight Black')} onMouseLeave={() => handleHover('')} onClick={() => handleColorChange('Black')}>
    {selectedColor === 'Black' && isHovered && <div className="hovering">{hoveredColor}</div>}
  </div>
  <div className={`circle orange ${selectedColor === 'Orange' ? 'selected' : ''}`} onMouseEnter={() => handleHover('Sunset Orange')} onMouseLeave={() => handleHover('')} onClick={() => handleColorChange('Orange')}>
    {selectedColor === 'Orange' && isHovered && <div className="hovering">{hoveredColor}</div>}
  </div>
  <div className={`circle grey ${selectedColor === 'Grey' ? 'selected' : ''}`} onMouseEnter={() => handleHover('Carbon Grey')} onMouseLeave={() => handleHover('')} onClick={() => handleColorChange('Grey')}>
    {selectedColor === 'Grey' && isHovered && <div className="hovering">{hoveredColor}</div>}
  </div>
  <div className={`circle green ${selectedColor === 'Green' ? 'selected' : ''}`} onMouseEnter={() => handleHover('Forest Green')} onMouseLeave={() => handleHover('')} onClick={() => handleColorChange('Green')}>
    {selectedColor === 'Green' && isHovered && <div className="hovering">{hoveredColor}</div>}
  </div>
</div>

        </div>
      </div>
<div className="main_head">
<div className="lower_heading">
        <h3>Discover Top-of-the-Line Features for Your #StopNot Journey</h3>
      </div>
</div>
      
      <div className="logo_part">
        <div className="logos">
          <div className="left_image">
            <img src={RunRfinals} alt="" />
          </div>
          <div className="right_image">
            <img src={RunRfinal} alt="" />
          </div>
        </div>
      </div>
      <div className="hs_visible">
            <img src={RunRfinals} alt="" />
          </div>
      <div className="tables">
      <table className="containerss_table first image_table">
	<tbody className='iconss'>
		<tr>
			<td><img src={Charge} alt="" /></td>

			
		</tr>
		<tr>
    <td><img src={Speed} alt="" /></td>


		</tr>
		<tr>
    <td><img src={Clustre} alt="" /></td>
    
		
		</tr>
    <tr>
    <td><img src={Wheels} alt="" /></td>
		</tr>
    <tr>
    <td><img src={Motor} alt="" /></td>
		</tr>
    <tr>
    <td><img src={Led} alt="" /></td>
		</tr>
    <tr>
    <td><img src={AntiAlarm} alt="" /></td>
		</tr>
    <tr>
    <td><img src={Battery} alt="" /></td>
		</tr>
	</tbody>
</table>
      <table className="container_table">
	<tbody>
		<tr>
	
			<td>130km/charge</td>
			
		</tr>
		<tr>
 
			<td>70 km/hour</td>

		</tr>
		
    <tr>

			<td>Alloy Wheels</td>
		</tr>
    <tr>
  
  <td>Digital Cluster</td>
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
  
			<td>60 v 29 Ah*2Li-on swappable batteries with can based BMS</td>
		</tr>
	</tbody>
</table>
<div className="hs_visible">
            <img src={RunRfinal} alt="" />
          </div>
<table className="containers_table">
	<tbody>
  <tr>
			
			<td>100km/charge</td>
			
		</tr>
		<tr>
		
			<td>70 km/hour</td>

		</tr>
    <tr>
			
			<td>Alloy Wheels</td>
		</tr>
		<tr>
    <td>Digital Cluster</td>
		
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
    <td>60 v 40 Ah*Li-on detachable batteries with can based BMS</td>
		
		</tr>
	</tbody>
</table>
<div className="grey_img">
<img src={WhiteL} alt="s" data-aos="fade-left"
     />
</div>
      </div>

      <div className="button_group">
      <Heading
            className="taleido_heading"
            id="glheading"
            title="BE A PART OF OUR R-MEE, today!"
          />
          <div className="buttons">
            <div className="left_part">
              <div className="image_new">
                <img src={Dealer} alt="" />
              </div>
                <div className="content">
                  <div className="details">
                    <h4>STYLE, SAVINGS AND SUSTAINAIBILITY
                    <br />FUSED-ONLY IN RUNR'S 
                    <br />E-SCOOTER!</h4>
                  </div>
                  <div className="book_now">
                    <Link to="/testdrive">
                     <button>BOOK NOW</button></Link>
                  </div>
                </div>
            </div>
            <div className="separator"></div>
            <div className="right_part">
         
           
              <div className="content">

              <div className="image_new">
                <img src={BookNow} alt="" />
              </div>
                  <div className="details">
                  <h4>OWN A BUSINESS THAT MAKES A
                    <br /> DIFFERENCE. BECOME A DEALER TODAY
                    <br /> AND PROMOTE ECO-FRIENDLY PRODUCTS</h4>
                  </div>
                  <div className="book_now">
                    <Link to="/dealer">
                      <button>APPLY FOR DEALERSHIP</button></Link>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Color;
