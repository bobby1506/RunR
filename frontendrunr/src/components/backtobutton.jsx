import React, { useState, useEffect } from 'react';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div className="backtotop" onClick={scrollToTop} >
          <MdKeyboardDoubleArrowUp />
        </div>
      )}
    </div>
  );
};

export default BackToTopButton;
