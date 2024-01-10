import React from "react";
import "./media.css"; // Import the CSS file

export default function ImageCard({ children, imgSrc, ...props }) {
  return (
    <div {...props} className="ImageCard">
      <img src={imgSrc} alt="" />
      <div className="absolute inset-0 flex items-end bg-gradient p-4 text-white">
        {children}
      </div>
    </div>
  );
}
