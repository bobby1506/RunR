import React, { useEffect, useRef, useState } from 'react';
import "./landingpage.css";
import Lottie from 'lottie-react';
import animateData from './welcome.json';
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaTemperatureHigh } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { IoFlash } from "react-icons/io5";
import Green from "./green.png"
import White from "./white4.png"
import Grey from "./grey4.png"
const imageSources = [
    Green,
    White,
    Grey
  // Add more image paths as needed
];

const Landingpage = () => {
  const imageRef = useRef(null);
  const [showImage, setShowImage] = useState(true); // Initially show the first image

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to switch to the next image in the array
  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
  };

  // Function to check if an element is in the viewport
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  // Function to handle scroll
  const handleScroll = () => {
    if (isInViewport(imageRef.current)) {
      setShowImage(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Use setInterval to change the image every 3 seconds
    const imageInterval = setInterval(showNextImage, 7000);

    return () => {
      window.removeEventListener('scroll', handleScroll);

      // Clear the interval when the component unmounts
      clearInterval(imageInterval);
    };
  }, []);

  return (
    <div>
      <section className='home section' id='home'>
        <div className="home__data">
          <h1 className='home_title'>
            Choose The Best EV
          </h1>
          <h2 className='home__subtitle'>
            RunR Mobility
          </h2>
          <h3 className='home__elec'>
            <i><BsFillLightningChargeFill /></i> Electric Vehicle
          </h3>
        </div>
        <div className="two-parts">
          <div className="home__container container grid">
            <div className="home__img-container">
              <img
                ref={imageRef}
                src={imageSources[currentImageIndex]}
                alt=""
                className={`home__img ${showImage ? "show" : "hidden"}`}
              />
            </div>
            <div className="home__car">
              <div className="home__car-data">
                <div className="home__car-icon">
                  <FaTemperatureHigh />
                </div>
                <h2 className='home__car-number'>24°</h2>
                <h3 className='home__car-name'>TEMPERATURE</h3>
              </div>
              <div className="home__car-data">
                <div className="home__car-icon">
                  <AiFillDashboard />
                </div>
                <h2 className='home__car-number'>873</h2>
                <h3 className='home__car-name'>MILEAGE</h3>
              </div>
              <div className="home__car-data">
                <div className="home__car-icon">
                  <IoFlash />
                </div>
                <h2 className='home__car-number'>94%</h2>
                <h3 className='home__car-name'>BATTERY</h3>
              </div>
            </div>
            <a href="#about" className="home__button">START</a>
          </div>
          <div className="home__lottie-container">
            <Lottie animationData={animateData} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landingpage;
