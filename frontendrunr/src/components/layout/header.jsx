import React, { useState } from 'react';
import { AiOutlineMenuFold, AiOutlineCloseCircle } from 'react-icons/ai';
import RunRFinal from './RunRFinal.png';
import './header.css';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <div>
      <header className={`header ${menuVisible ? 'show-menu' : ''}`} id='header'>
        <nav className='nav container'>
          <a href='/' className='nav__logo'>
            <img src={RunRFinal} alt='' />
          </a>
          <div className={`nav__menu ${menuVisible ? 'show-menu' : ''}`} id='nav-menu'>
            <ul className='nav__list'>
              <li className='nav__item' onClick={closeMenu}>
                <a href='/testdrive' className='nav__link'>
                  TEST DRIVE
                </a>
              </li>
              <li className='nav__item' onClick={closeMenu}>
                <a href='/testdrive' className='nav__link'>
                  BOOK NOW
                </a>
              </li>
              <li className='nav__item' onClick={closeMenu}>
                <a href='/dealer' className='nav__link'>
                  BECOME A DEALER
                </a>
              </li>
              <li className='nav__item' onClick={closeMenu}>
                <a href='#featured' className='nav__link'>
                  ABOUT US
                </a>
              </li>
              <li className='nav__item' onClick={closeMenu}>
                <a href='#featured' className='nav__link'>
                  CONTACT US
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
