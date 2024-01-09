import React from 'react';
import Logo from "../Images/logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='footer-section-one'>
        <div className='footer-logo-container'>
          <img src={Logo} alt="" />
        </div>
        <div className='footer-icons'>
          <Link to="/comingsoon"><BsTwitter /></Link>
          <Link to="/comingsoon"><SiLinkedin /></Link>
          <Link to="/comingsoon"><FaFacebook /></Link>
          <Link to="/comingsoon"><AiOutlineInstagram /></Link>
        </div>
      </div>

      <div className='footer-section-two'>
        <div className='footer-section-columns'>
          <Link to="/comingsoon"><span>Quality</span></Link>
          <Link to="/comingsoon"><span>Help</span></Link>
          <Link to="/comingsoon"><span>Share</span></Link>
          <Link to="/comingsoon"><span>Careers</span></Link>
        </div>
        <div className='footer-section-columns'>
          <span>011-6954 2562</span>
          <span>faiqfadhlullah723@gmail.com</span>
        </div>
        <div className='footer-section-columns'>
          <Link to="/comingsoon"><span>Terms & Conditions</span></Link>
          <Link to="/comingsoon"><span>Privacy Policy</span></Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
