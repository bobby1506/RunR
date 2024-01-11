import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarker, faPhone, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import {BsFacebook,BsInstagram, BsTwitter} from "react-icons/bs"
import './footer.css';
import RunRFinal from "../layout/RunRFinal.png"

const Footer = () => {
 
  return (
   <footer className='footer2'>
    <div className="container_footer">
      <div className="col1">
        <a href="" className='brand'>Brand</a>
        <ul className='media-icons'>
          <li>
            <a href="">
              <i className='fab'><BsFacebook/></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className='fab'><BsFacebook/></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className='fab'><BsFacebook/></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className='fab'><BsFacebook/></i>
            </a>
          </li>
          
        </ul>
      </div>

      <div className="col2">
        <ul className='menu'>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Test Drive</a>
          </li>
          <li>
            <a href="#">Book Now</a>
          </li>
        </ul>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ullam quisquam earum mollitia minima, consequatur, nostrum eveniet, blanditiis facere veniam fugiat exercitationem officia natus repudiandae assumenda ea harum. Ex, repellat.
        </p>
      </div>

      <div className="col3">
        <p>Book a test drive now</p>
        <button type='submit'>
          <i className='fas'></i>
        </button>
      </div>
      <ul className='service-icons'>
      <li>
            <a href="">
              <i className='fab'><BsFacebook/></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className='fab'><BsFacebook/></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className='fab'><BsFacebook/></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className='fab'><BsFacebook/></i>
            </a>
          </li>
          
        </ul>
    </div>
   </footer>
  );
};

export default Footer;
