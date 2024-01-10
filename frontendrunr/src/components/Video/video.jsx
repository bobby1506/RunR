// VideoPage.js
import React, { useRef, useEffect } from 'react';
import './VideoPage.css'; // Import your CSS file
import Explore from "../../assets/video2.mp4"
const VideoPage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // use the viewport as the root
      rootMargin: '0px',
      threshold: 0.5, // trigger when 50% of the video is visible
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Video is in the viewport, play it
          videoRef.current.play();
        } else {
          // Video is not in the viewport, pause it
          videoRef.current.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(videoRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="video-container">
      <video ref={videoRef}>
        <source src={Explore} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPage;
