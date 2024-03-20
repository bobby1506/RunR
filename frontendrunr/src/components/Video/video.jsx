// VideoPage.js
import React, { useRef, useState } from 'react';
import './VideoPage.css'; // Import your CSS file
import im from "../../assets/about.jpeg"
import Heading from '../../Common/Headings/Heading';
import { IoPlayCircleOutline } from "react-icons/io5";
import { FaRegPauseCircle } from "react-icons/fa";
const VideoPage = () => {
  const videoRef = useRef(null);
  const playButtonRef = useRef(null);

  // State to manage whether to show the thumbnail
  const [showThumbnail, setShowThumbnail] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to handle the play/pause button click and toggle play/pause
  const handlePlayPauseClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
      setShowThumbnail(false);
    }
  };

  return (
    <div className="main_video">
      <Heading
        className="taleido_heading"
        id="glheading"
        title="Exclusive Sneak Peek: Explore Our Production Plant"
      />
      <div className="video-container" onClick={handlePlayPauseClick}>

        {/* Video element */}
        <video ref={videoRef} controls={false} poster={im}>
          <source src="https://res.cloudinary.com/dlf8u5l7a/video/upload/v1706895464/runr/cgp3mdynqqxdgi7vqdlo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play/Pause button */}
        <button ref={playButtonRef} className={`play-button ${isPlaying ? 'hide' : ''}`}>
          {isPlaying ?  <FaRegPauseCircle />:<IoPlayCircleOutline /> }
        </button>
        
      </div>
    </div>
  );
};

export default VideoPage;
