import React from "react";
import AboutBackground from "../Images/AboutBackground.png";
import AboutBanner from "../Images/AboutBanner.png";
import { ScrollAnimations } from "./ScrollAnimation.tsx";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
  
      <div className="about-section-image-container">
        <img src={AboutBanner} alt="" />
      </div>
      
      <div className="about-section-text-container">

        <h1 className="primary-heading" color="black">
          Do you know that less than 1/3 of the waste in Malaysia is recycled?
        </h1>


        <p className="primary-text">
         According to a 2020 study, Malaysians only recycle 30% of total waste, far lower than the global average of 42%. This is a worrying statistic, as it shows that Malaysians are not doing enough to protect the environment.
        </p>

  
      </div>
    </div>
  );
};

export default About;