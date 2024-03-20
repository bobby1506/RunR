import React from 'react';
import RunRFinal from './RunRFinal.png';
import { Link } from 'react-router-dom';
import {BsFacebook,BsInstagram} from "react-icons/bs"
import { FaLinkedin } from "react-icons/fa6";
import QR from "../../assets/qr.png"
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
              <li><Link href="/">Home</Link></li>
              <li><a href="/#about">About</a></li>
              <li><Link href="/">Contact</Link></li>
              <li><Link href="/">Book Now</Link></li>
              <li><Link href="/testdrive">Test Drive</Link></li>
              <li><Link href="/dealer">Become A Dealer</Link></li>
              <li><Link href="/blog">Blog</Link></li>
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
              <p>Shop No 1 & 2 Gajanand Complex Opp Tube</p>
              <p>Company, OP Road Vadodara Gujarat-390020</p>
              <p><span>+91 6393207767</span>
              </p>
            </div>
            <div className="footer-social-icon">
              <span>Follow us</span>
              <a href="#" className='special'><BsFacebook/><i className="fab"></i></a>
              <a href="#" className='special'><BsInstagram/><i className="fab"></i></a>
              <a href="#"><FaLinkedin/><i className="fab"></i></a>
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

