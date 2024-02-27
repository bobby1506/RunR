import React from 'react';
import About from "../../assets/about.jpeg"
import './aboutnew.css'; // Import your CSS file for styling

const Aboutnew = () => {
  return (
    <div className="container_about">
      <div className="background-image">
        <img src={About} alt="" />
      </div>
      <div className="content-boxs">
        {/* <h1>Your Title</h1> */}
        <p>Powered by a mission to add green energy to the environment, our parent company, MECpower Solutions Ltd., stands tall as the 7th largest solar rooftop EPC company in India with a striking revenue growth of 465%. The company possesses a rich experience of more than 30 years, during which it has designed and developed infrastructure that can generate a total power of 35+ MW for 6,000 projects.</p>

<p>MECpower Solutions has shown consistent annual growth over the years by bringing technologically advanced, end-to-end solar solutions to its customers.
RunR Mobility is built on the same ethos and aims to achieve supremacy in the domain of swappable batteries.</p> 

<p>Based in Gujarat, RunR Mobility manufactures 100% indigenous smart-electric scooters with swappable batteries. It boasts a massive, cutting-edge 4.2-acre plant that can build 500 vehicles each day.</p> 

<p>RunR Mobility is among the very few EV manufacturers in Asia that own an innovation hub that incorporates in-house battery and motor testing. </p>

<p>Armed with the necessary infrastructure and technology, RunR Mobility is geared up to disrupt the EV industry with two path-breaking models: the RUNR HS and RUNR HS+. 
</p>
      </div>
    </div>
  );
};

export default Aboutnew;
