import React from 'react';
import RunRFinal from './RunRFinal.png';
import { Link } from 'react-router-dom';
import {BsFacebook,BsInstagram} from "react-icons/bs"
import { FaLinkedin } from "react-icons/fa6";
import QR from "../../assets/runrmobility_qr.png"
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-section" id='footer'>
         <div className="footer-cta pt-5 pb-5 rebel">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <div className="cta-text">
                  <h3>RAPID | RABEL | REVOLUTIONARY</h3>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
            </div>
          </div>
        </div>
      <div className="container_footer">
     
        <div className="footer-content pt-5 pb-5">
          <div className="row">
          <div className="col-xl-4 col-lg-4 mb-50">
          <div className="footer-widget">
            <div className="footer-logo">
              <a href="index.html"><img src={RunRFinal} class="img-fluid" alt="logo"/></a>
            </div>
            <div className="subscribe-form">
              <form action="#">
                 <div className="qr">
                 <img src={QR} alt="" />
                 </div>
                 
              </form>
            </div>
           
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 mb-30 second_part">
          <div className="footer-widget">
            <div className="footer-widget-heading">
              <h3>Useful Links</h3>
            </div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/">Contact</Link></li>
              {/* <li><Link to="/">Book Now</Link></li> */}
              <li><Link to="/testdrive">Test Drive</Link></li>
              <li><Link to="/dealer">Become A Dealer</Link></li>
              {/* <li><Link to="/blog">Blog</Link></li> */}
            </ul>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 mb-50 second_part">
          <div className="footer-widget">
            <div className="footer-widget-heading address">
              <h3>Address</h3>
            </div>
            <div className="footer-text mb-25">
              <p>Green Wheelz Ev</p>
              <p>MAHAVIR HOUSE, 8 C, Kamdhenu Estate Water Tank,</p>
              <p>Near Gorwa Rd,Gorwa, Vadodara Gujarat-390003</p>
              <p><span>+91 9313803171</span>
              </p>
            </div>
            <div className="footer-social-icon">
              <span>Follow us</span>
              <Link to="https://www.facebook.com/profile.php?id=100090670182354" className='special'><BsFacebook/><i className="fab"></i></Link>
              <Link to="https://www.instagram.com/runrmobility/" className='special'><BsInstagram/><i className="fab"></i></Link>
              <Link to="https://www.linkedin.com/company/runr-mobility/"><FaLinkedin/><i className="fab"></i></Link>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

