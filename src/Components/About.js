import React from "react";
import AboutBackground from "../Images/AboutBackground.png";
import AboutBanner from "../Images/AboutBanner.png";
import { ScrollAnimations } from "./ScrollAnimation.tsx";
import AboutBackground2 from "../Images/ReviewBackground.png";
import AboutBanner2 from "../Images/AboutBanner2.png";
import Wondering from "../Images/Wondering.png";
import SloganBackground from "../Images/SloganBackground.png";
import Logo from "../Images/logo.svg";
import Paper from '@mui/material/Paper';
const About = () => {
  return (
    <>
      <div className="about-section-container">
        <div className="about-background-image-container">
          <img src={AboutBackground} alt="" />
        </div>

        <div className="about-section-image-container">
          <ScrollAnimations>
            <img src={AboutBanner} alt="" />
          </ScrollAnimations>
        </div>

        <div className="about-section-text-container">
          <h1 className="primary-heading" color="black">
            <ScrollAnimations>
              Do you know that less than 1/3 of the waste in Malaysia is recycled?
            </ScrollAnimations>
          </h1>

          <p className="primary-text">
            <ScrollAnimations>
              According to a 2020 study, Malaysians only recycle 30% of total waste, far lower than the global average of 42%. This is a worrying statistic, as it shows that Malaysians are not doing enough to protect the environment.
            </ScrollAnimations>
          </p>
        </div>
      </div>

      <div className="about-section-container-2">
        <div className="about-background-image-container-2">
          <img src={AboutBackground2} alt="" />
        </div>

        <div className="about-section-image-container-2">
          <ScrollAnimations>
            <img src={AboutBanner2} alt="" />
          </ScrollAnimations>
        </div>

        <div className="about-section-text-container-2">
          <h1 className="primary-heading" color="black">
            <ScrollAnimations>
             And that only 14% of Malaysian households recycle?
            </ScrollAnimations>
          </h1>

          <p className="primary-text">
            <ScrollAnimations>
             Are you a part of that 14%? Or are you a part of the 86% that does not recycle?
            </ScrollAnimations>
          </p>
        </div>
      </div>

<div className="about-slogan-container">

<hr></hr>
  <div className="about-slogan-container-2">
  
     <ScrollAnimations>
      <h1 >
      Try <span style={{backgroundColor:'green',borderRadius:'36px',color:'white'}}>EZWaste</span> !
      </h1>
      </ScrollAnimations>
    <div className="about-slogan-background">
      <img src={SloganBackground} alt="" />

    </div>

  </div>
  <hr></hr>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<hr></hr>
  <div className="about-slogan-container-1">
  <hr></hr>
     <ScrollAnimations>

      <h1 >
      Want to <span style={{backgroundColor:'green',borderRadius:'36px',color:'white'}}>recycle</span> but don't know how? 
      </h1>
      </ScrollAnimations>
  
      <img src={Wondering} alt="" />
      <hr></hr>
  </div>
  <hr></hr>
</div>
<hr></hr>


<div className="work-section-top-1">
<img src={Logo} alt=""  style={{margin:'0 auto', width:'50vw'}}/>
<h1 className="primary-heading" >

          <ScrollAnimations>
          About

          </ScrollAnimations>
          </h1>
<Paper elevation={1} square={false}>
        <p className="primary-text-1">
          <ScrollAnimations>
          EZWaste is your dedicated partner in sustainable recycling solutions. Committed to driving positive change, we specialize in innovative waste management services designed to elevate recycling practices and minimize environmental impact.
          </ScrollAnimations>
        </p>

          <p className="primary-text-1">
          <ScrollAnimations>
          At EZWaste, we believe in transforming waste into valuable resources. Our mission is to make recycling easy and accessible for businesses and communities alike. Through cutting-edge technology and a passion for the planet, we empower you to contribute to a greener future.
          </ScrollAnimations>
          </p>


          <p className="primary-text-1">
          <ScrollAnimations>
          Join us on the journey towards a circular economy, where every recycled item brings us one step closer to a cleaner, healthier planet. Choose EZWaste for a brighter, more sustainable tomorrow.
          </ScrollAnimations>
          </p>
</Paper>
<br></br><br></br><br></br>
</div>
<hr/>

    </>
  );
};

export default About;
