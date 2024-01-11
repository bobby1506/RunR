import React, { useEffect } from 'react';
import './color.css'; // Import your CSS file
import GreenEv from '../../assets/orangee.png';
import AOS from 'aos';
import RunRfinal from "../../assets/RunRFinal.png"
const Color = () => {
  useEffect(() => {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }, []);

  return (
    <div className="main_color_div">
    <div className="blacks-container">
      <div className="white-box left-box">
        <div className="green_evvehicle">
          <img src={GreenEv} alt="" data-aos="fade-up" data-aos-anchor-placement="center-bottom" />
        </div>
        {/* Circles */}
        <div className="circle_main">
        <div className="circle white"></div>
        <div className="circle black"></div>
        <div className="circle orange"></div>
        <div className="circle grey"></div>
        <div className="circle green"></div>
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
