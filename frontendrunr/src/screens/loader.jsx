// import React from 'react';
// import './loading.css'; // Import your CSS file for styling

// const SwappingSquaresSpinner = () => {
 

//   return (
//     <div className="swapping-squares-spinner">
//       <div className="square"></div>
//       <div className="square"></div>
//       <div className="square"></div>
//       <div className="square"></div>
//     </div>
//   );
// };

// export default SwappingSquaresSpinner;
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/a.json'; // Replace 'your_animation.json' with the path to your Lottie animation JSON file
import './loading.css'; // Import your CSS file for styling

const LottieSpinner = () => {
  return (
    <div className="swapping-squares-spinner">
      <div className="lottie-animation-container">
        <Lottie animationData={animationData} autoplay loop />
      </div>
    </div>
  );
};

export default LottieSpinner;
