// App.js
import React, {useEffect} from 'react';
import './safety.css'
import Orange from "../../assets/orange.png"
import AOS from 'aos'
const Safety = () => {

  
  useEffect(()=>{
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  },[])
    
  return (
    <div className="black-container">
      <div className="black-box left-box"  data-aos="zoom-in-right">
        <div className="main_content_orange">
        <div className="solid_safety">
          <h2>SOLID SAFETY</h2>
        </div>
        <div className="liquid">
          <span><sup>WITH</sup></span><h4> LIQUID COOLANT!</h4>
        </div>

        <div className="points_orange">
          <h4>0 KELVIN TECHNOLOGY IMMERSION COOLING</h4>
          <h4>CERTIFIED EXPLOSION PROOF BATTERIES</h4>
          <h4>3000+ CYCLES</h4>
          <h4>FAST CHARGING</h4>
        </div>
        </div>
        
      {/* <div className="wrapperss">
          <i class="zmdi zmdi-chevron-up zmdis"></i>
          <i class="zmdi zmdi-chevron-up zmdis"></i>
          <i class="zmdi zmdi-chevron-up zmdis"></i>
          </div> */}
      </div>
      <div className="orange-box right-box">
        <div className="main_content">
        <div className="orange_ev" data-aos="zoom-in-left">
        <span>0 Kelvin<sup>TM</sup></span>
          <img src={Orange} alt="s" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="1500"
     data-aos-duration="1500"/>
     
         
          
        </div>
       
        </div>
       
     
      </div>
    </div>
  );
};

export default Safety;
