import React, {useEffect} from 'react';
import './safety.css'
import Orange from "../../assets/orange.png"
import AOS from 'aos'
import snow from "../../assets/snowflake.png"
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
          <h4>ADVANCED SOLUTIONS WITH </h4>
        </div>
        <div className="liquid">
          <span></span><h4>LIQUID COOLANT</h4>
          <h4> TECHNOLOGY</h4>
        </div>

        <div className="points_orange">
          <h4>0 Kelvin Technology Immersion Cooling</h4>
          <h4>Certified Explosion Proof Batteries</h4>
          <h4>3000+ Cycles</h4>
          <h4>Fast Charging</h4>
        </div>
        <div className="snowflake">
          <img src={snow} alt="" />
        </div>
        </div>
      </div>
      <div className="orange-box right-box">
        <div className="main_content">
        <div className="orange_ev" data-aos="zoom-in-left">
        <span>SOLID</span>
        <div className="safety">
        <span>SAFETY</span>
       </div>
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
