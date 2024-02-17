// VideoPage.js
import React, { useRef, useState } from 'react';
import './VideoPage.css'; // Import your CSS file
// import Explore from "../../assets/rurn.mp4";
import { FaRegPlayCircle } from "react-icons/fa";
import Heading from '../../Common/Headings/Heading';

const VideoPage = () => {
  const videoRef = useRef(null);


  return (
    <div className="main_video">
      <Heading
        className="taleido_heading"
        id="glheading"
        title="Exclusive Sneak Peek: Explore Our Production Plant
        "
      />
      <div className="video-container">
        <video ref={videoRef} controls>
          <source src="https://res.cloudinary.com/dlf8u5l7a/video/upload/v1706895464/runr/cgp3mdynqqxdgi7vqdlo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
       
      </div>
    </div>
  );
};

export default VideoPage;
