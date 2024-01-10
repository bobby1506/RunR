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
      <div className="wrapperss">
          <i class="zmdi zmdi-chevron-up"></i>
          <i class="zmdi zmdi-chevron-up"></i>
          <i class="zmdi zmdi-chevron-up"></i>
          </div>
      </div>
      <div className="orange-box right-box">
        <div className="main_content">
        <div className="orange_ev" data-aos="zoom-in-left">
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
