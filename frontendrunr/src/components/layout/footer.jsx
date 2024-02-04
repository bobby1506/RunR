import React from 'react';
import RunRFinal from './RunRFinal.png';
import { Link } from 'react-router-dom';
import {BsFacebook,BsInstagram, BsTwitter} from "react-icons/bs"
import { FaRegAddressBook } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import { MdMarkEmailUnread } from "react-icons/md";
import QR from "../../assets/qr.png"
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-section" id='footer'>
      <div className="container_footer">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas"><FaRegAddressBook/></i>
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>1010 Avenue, sw 54321, chandigarh</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas"><MdAddIcCall /></i>
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>9876543210 0</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="far"><MdMarkEmailUnread /></i>
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>marketing@runrmobility.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="row">
          <div class="col-xl-4 col-lg-4 mb-50">
          <div class="footer-widget">
            <div class="footer-logo">
              <a href="index.html"><img src={RunRFinal} class="img-fluid" alt="logo"/></a>
            </div>
            <div class="footer-text">
              <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                elit,Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="footer-social-icon">
              <span>Follow us</span>
              <a href="#"><BsFacebook/><i class="fab"></i></a>
              <a href="#"><BsInstagram/><i class="fab"></i></a>
              <a href="#"><BsTwitter/><i class="fab"></i></a>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
          <div class="footer-widget">
            <div class="footer-widget-heading">
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
        <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
          <div class="footer-widget">
            <div class="footer-widget-heading">
              <h3>Subscribe</h3>
            </div>
            <div class="footer-text mb-25">
              <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
            </div>
            <div class="subscribe-form">
              <form action="#">
                {/* <input type="text" placeholder="Email Address"/> */}
                {/* <button><i class="fab fa-telegram-plane"><BsInstagram/></i></button>
                 */}
                 <img src={QR} alt="" />
              </form>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>Copyright &copy; 2023, All Right Reserved <a href="/">RunR</a></p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/testdrive">Test Drive</Link></li>
                  <li><Link to="/dealer">Dealership</Link></li>
                  <li><a href="#footer">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

