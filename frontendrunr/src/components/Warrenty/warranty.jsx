// App.js
import React, {useEffect} from 'react';
import "../Safety/safety.css"
import White from "../../assets/white.png"
import AOS from "aos"
import Award from "../../assets/awards.png"
const Warranty = () => {

  useEffect(()=>{
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  },[])
    
  return (
    <div className="black-container">
      <div className="blue-box left-box"  data-aos="zoom-in-right">
      <div className="green_ev">
          <img src={White} alt="" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"/>
        </div>
        <div className="award">
        <img src={Award} alt="" />
        </div>
        <div className="stopnot">
        <span>WARRANTY</span>
        
        </div>
        <div className="assured">
          <span>ASSURED</span>
        </div>
      </div>
      <div className="blackk-box right-box" data-aos="zoom-in-left">
      
        <div className="main_content">
        <div className="KMS">
          <h1>Comprehensive Warranty UPTO 85,000 KM
</h1>
<h2>Discover the Extensive Benefits today!</h2>
        </div>
        <div className="warranty">
          <span>Enjoy peace of mind with the RunR HS, boasting an 85,000 km warranty. Drive confidently knowing your journey is covered.
</span><h4></h4>
        </div>
        </div>
        <div className="wrapper">
          <i className="zmdi zmdi-chevron-up"></i>
          <i className="zmdi zmdi-chevron-up"></i>
          <i className="zmdi zmdi-chevron-up"></i>
          </div>
       
     
      </div>
    </div>
  );
};

export default Warranty;
