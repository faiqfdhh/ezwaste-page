import React from 'react'
import Logo from "../Images/logo.svg";
import {BsTwitter} from "react-icons/bs";
import {SiLinkedin} from "react-icons/si";
import {FaFacebook} from "react-icons/fa";
import {AiOutlineInstagram} from "react-icons/ai";


 const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-section-one'>
            <div className='footer-logo-container'>
            <img src={Logo} alt="" />
            </div>
        <div className='footer-icons'>
            <BsTwitter/>
            <SiLinkedin/>
            <FaFacebook/>
            <AiOutlineInstagram/>
        </div>
        </div>


        <div className='footer-section-two'>
            <div className='footer-section-columns'>
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Careers</span>
            
            </div>
            <div className='footer-section-columns'>
                <span>011-6954 2562</span>
                <span>faiqfadhlullah723@gmail.com</span>
          
            </div>
            <div className='footer-section-columns'>
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
    
            </div>
        </div>
    </div>
  )
}

export default Footer;
