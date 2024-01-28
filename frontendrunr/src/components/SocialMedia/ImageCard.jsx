import React from "react";
import "./media.css"; // Import the CSS file

export default function ImageCard({ children, imgSrc, link, ...props }) {
  const cardContent = (
    <div className="absolute inset-0 flex items-end bg-gradient p-4 text-white">
      {children}
    </div>
  );

  return (
    <div {...props} className="ImageCard">
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={imgSrc} alt="" />
          {cardContent}
        </a>
      ) : (
        <>
          <img src={imgSrc} alt="" />
          {cardContent}
        </>
      )}
    </div>
  );
}
