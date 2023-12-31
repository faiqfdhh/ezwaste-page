import React from "react";
import  Navbar  from "./Navbar";
import BannerBackground from "../Images/HomeBanner.png";
import HeroBanner from "../Images/HeroBanner.png";
import { FiArrowRight } from "react-icons/fi";
import {ScrollAnimations}  from "./ScrollAnimation.tsx";


const Home = () => {
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
                <button className="secondary-button">
                    Download Now <FiArrowRight />
                </button>
                </ScrollAnimations>
            </div>
            <div className="home-image-section">
                <img src={HeroBanner} alt="" />
            </div>
            </div>
        </div> // Added closing tag for the div element
     );
}
 
export default Home;