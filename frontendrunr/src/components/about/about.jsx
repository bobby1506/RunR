// App.js
import React, { useEffect } from 'react';
import './about.css'; // Import your CSS file
import GreenEv from "../../assets/green.png";
import AOS from 'aos'
const About = () => {

  useEffect(()=>{
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  },[])
    
  return (
    <div className="black-container">
      <div className="green-box left-box" data-aos="zoom-in-right">
        <div className="green_ev" >
    
          <img src={GreenEv} alt="ss" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" />
         
        </div>
      </div>
      <div className="content-box right-box" data-aos="zoom-in-left" >
        <div className="main_content">
        <div className="head_content" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
    >
            <h1>MADE IN INDIA</h1>
            <h2>MADE FOR INDIA</h2>
        </div>
        <div className="content" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
            <h6>We want you to get out there and have fun.
RunR HS has been crafted with obsessive
attention to detail. Each and every part is designed
to make the urban, stop & go traffic more bearable.
But before you get on the easy, comfy ride, here’s
all the important stuff you need to read about. This
quick start guide will tell you all about the features
and components of the RunR HS, the RunR app,
the battery pack & the Point. And while we’re
thrilled the first kilometer of the electric revolution
starts with you we know still have a long way to go
until India and the rest of the world entirely go
electric
            </h6>
        </div>
        </div>
       
      <div className="wrapper">
          <i class="zmdi zmdi-chevron-up"></i>
          <i class="zmdi zmdi-chevron-up"></i>
          <i class="zmdi zmdi-chevron-up"></i>
          </div>
      </div>
    </div>
  );
};

export default About;
