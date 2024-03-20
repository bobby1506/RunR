// App.js
import React, { useEffect } from 'react';
import './about.css'; // Import your CSS file
import GreenEv from "../../assets/green.png";
import Hundred from "../../assets/hunderd.png";
import AOS from 'aos'
import Satyamev from "../../assets/satyamev.png"
const About = () => {

  useEffect(()=>{
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  },[])
    
  return (
    <div className="black-container" id='about'>
      <div className="green-box left-box" data-aos="zoom-in-right">
        <div className="green_ev" >
    
          <img src={GreenEv} alt="ss" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" />
     {/* <img src={Hundred} alt="" /> */}
  
        </div>
      
        <div className="hundred">
        <img src={Hundred} alt="" />
        </div>
        <div className="indigineous">
        <h3>INDIGINEOUS</h3>
        </div>
      </div>
   
      <div className="content-box right-box" data-aos="zoom-in-left" >
        <div className="main_content">
        <div className="head_content" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
    >
       
            <h1>100% MADE IN INDIA </h1>
            <h2>MADE FOR INDIA</h2>
        </div>
        <div className="content" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
            <h6>RunR Mobility introducing the RunR HS: Affordable, cutting-edge EVs made entirely in India. With a design for everyone and built to tackle Indian roads, it's fast, affordable, and has incredibly low running costs. Truly Indian at heart, it's the perfect ride for modern urban living.

            </h6>
        </div>
        </div>
       
      <div className="wrapper">
          <img src={Satyamev} alt="" />
          </div>
      </div>
    </div>
  );
};

export default About;
