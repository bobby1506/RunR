// App.js
import React , {useEffect} from 'react';
import './color.css'; // Import your CSS file
import GreenEv from "../../assets/orangee.png";
import AOS from 'aos';

const Color = () => {
 
  useEffect(()=>{
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  },[])

  return (
    <div className="black-container">
      <div className="white-box left-box">
        <div className="green_evvehicle">
          <img src={GreenEv} alt="" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"/>
        </div>
      </div>
      <div className="content-details right-box">
        <div className="main_content">
        </div>
     
      </div>
    </div>
  );
};

export default Color;
