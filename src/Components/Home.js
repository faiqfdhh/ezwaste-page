import React from "react";
import  Navbar  from "./Navbar";
import BannerBackground from "../Images/HomeBanner.png";
import HeroBanner from "../Images/HeroBanner.png";
import { FiArrowRight } from "react-icons/fi";
import {ScrollAnimations}  from "./ScrollAnimation.tsx";
import About from "./About.js";
import Steps from "./Steps.js";
import { useNavigate } from "react-router-dom";
import 'video-react/dist/video-react.css';
import { Player } from 'video-react';
import Video from "../Images/CAT201VIDEO.mp4";
import Faq from "./FAQ.js";

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('./Signup');
  };

    return ( 
        <div className="home-container">
           <Navbar/>
        
            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    <img src={BannerBackground} alt="" />
                </div>
            <div className="home-text-section">
                <ScrollAnimations>
                <h1 className="primary-heading">
                EZWaste. Simplifying Waste Management.
                </h1>
                <p className="primary-text"> 
                 Tired of the hassle of waste management? Switch to EZWaste , the one stop solution for all your waste management needs.
                </p>
                <button className="secondary-button" onClick={handleButtonClick}>
                    Sign Up Now! <FiArrowRight />
                </button>
                </ScrollAnimations>
            </div>
            <div className="home-image-section">
                <img src={HeroBanner} alt="" />
            </div>
            </div>
            <div className="video-container" style={{marginTop:'1rem',marginBottom:'10rem'}}>
    <Player >
      <source src={Video} />
    </Player>
    </div>

        <About/>

        <Steps/>

        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        <div className="signup-button" style={{display:'flex',justifyContent:'center'}}>
        <button className="secondary-button" style={{width:'500px',height:'100px',fontSize:'50px'}} onClick={handleButtonClick}> Sign Up Now!</button>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Faq/>
        </div> 
     );
}
 
export default Home;