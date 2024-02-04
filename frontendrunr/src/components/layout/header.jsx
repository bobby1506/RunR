import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
                <a href='#about' className='nav__link'>
                  ABOUT US
                </a>
              </li>
              <li className='nav__item' onClick={closeMenu}>
                <a href='#footer' className='nav__link'>
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
