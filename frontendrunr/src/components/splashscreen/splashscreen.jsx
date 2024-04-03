// import React, { useEffect, useState } from 'react';
// import './splashscreen.css';
// import Logo from "./RunRFinal.png";

// function SplashScreen() {
//   const [showSplash, setShowSplash] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setShowSplash(false);
//     }, 3000);
//   }, []);

//   return (
//     showSplash && (
//       <div className="splash-screen">
//         <div className="splash-content">
//           <img src={Logo} alt="Your Logo" className="logo" />
//         </div>
//       </div>
//     )
//   );
// }

// export default SplashScreen;
import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/a.json'; // Replace 'your_animation.json' with the path to your Lottie animation JSON file
import './splashscreen.css';

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
          <Lottie animationData={animationData} autoplay loop className="lottie-animation" />
        </div>
      </div>
    )
  );
}

export default SplashScreen;
