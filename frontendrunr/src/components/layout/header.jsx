import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenuFold, AiOutlineCloseCircle } from 'react-icons/ai';
import RunRFinal from './RunRFinal.png';
import pdf from "../../assets/ebrochure.pdf"
import './header.css';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  function downloadBrochure() {
    // Assuming 'brochure.pdf' is the name of your brochure file
    const brochureUrl = pdf;
    
    // Create an anchor element
    const link = document.createElement('a');
  
    // Set the href attribute to the URL of the brochure file
    link.href = brochureUrl;
  
    // Set the download attribute to specify the default file name
    link.download = 'ebrochure.pdf';
  
    // Append the anchor element to the body
    document.body.appendChild(link);
  
    // Trigger a click event on the anchor element
    link.click();
  
    // Remove the anchor element from the body
    document.body.removeChild(link);
  }
  return (
    <div>
      <header className={`header ${menuVisible ? 'show-menu' : ''}`} id='header'>
        <nav className='nav container'>
          <Link to='/' className='nav__logo'>
            <img src={RunRFinal} alt='' />
          </Link>
          <div className={`nav__menu ${menuVisible ? 'show-menu' : ''}`} id='nav-menu'>
            <ul className='nav__list'>
              <li className='nav__item' onClick={closeMenu}>
                <Link to='/testdrive' className='nav__link'>
                  TEST DRIVE
                </Link>
              </li>
              <li className='nav__item' onClick={closeMenu}>
                <Link to='/testdrive' className='nav__link'>
                  BOOK NOW
                </Link>
              </li>
              <li className='nav__item' onClick={closeMenu}>
                <Link to='/dealer' className='nav__link'>
                  BECOME A DEALER
                </Link>
              </li>
              <li className='nav__item' onClick={closeMenu}>
              <Link to='/about' className='nav__link'>
                  ABOUT US
                </Link>
              </li>
              <li className='nav__item' onClick={closeMenu}>
                <a href='#footer' className='nav__link'>
                  CONTACT US
                </a>
              </li>
              <li className='nav__item' onClick={() => { closeMenu(); downloadBrochure(); }}>
                <a href='#' className='nav__link'>
                   DOWNLOAD E-BROCHURE
                </a>
              </li>
            </ul>

            <div className='nav__close' id='nav-close' onClick={toggleMenu}>
              <i className='ri-close-line'>
                <AiOutlineCloseCircle />
              </i>
            </div>
          </div>

          <div className='nav__toggle' id='nav-toggle' onClick={toggleMenu}>
            <i className='ri-menu-line'>
              <AiOutlineMenuFold />
            </i>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
