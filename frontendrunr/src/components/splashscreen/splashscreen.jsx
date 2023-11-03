import React, { useEffect, useState } from 'react';
import './splashscreen.css';
import Logo from "./RunRFinal.png";

function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  }, []);

  return (
    showSplash && (
      <div className="splash-screen">
        <div className="splash-content">
          <img src={Logo} alt="Your Logo" className="logo" />
        </div>
      </div>
    )
  );
}

export default SplashScreen;
