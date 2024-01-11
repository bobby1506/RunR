// VideoPage.js
import React, { useRef, useEffect, useState } from 'react';
import './VideoPage.css'; // Import your CSS file
import Explore from "../../assets/video2.mp4"

const VideoPage = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="video-container">
      <video ref={videoRef} onClick={togglePlayPause}>
        <source src={Explore} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={`play-pause-button ${isPlaying ? 'playing' : 'paused'}`} onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </div>
    </div>
  );
};

export default VideoPage;
