import React from "react";
import PackWaste from "../Images/PackWaste1.png";
import TapButton from "../Images/TapButton.png";
import CarDelivery from "../Images/CarDelivery.png";
import GetRewarded from "../Images/GetRewarded.png";
import { ScrollAnimations } from "./ScrollAnimation.tsx";

const Steps = () => {
    const workInfoData = [
        {
          image: PackWaste,
          title: "Pack your waste",
          text: "Collect and pack any waste and recyclable materials such as metal, plastic and paper into one or more single containers to be picked up.",
        },
        {
          image: TapButton,
          title: "Schedule your delivery",
          text: "Schedule your delivery effortlessly using EZWaste app.",
        },
        {
          image: CarDelivery,
          title: "Wait for your driver",
          text: "Experience real-time driver tracking with our advanced system—watch and anticipate your driver's arrival hassle-free!",
        },
        {
          image: GetRewarded,
          title: "Get rewarded with points!",
          text: "Unlock exclusive rewards by earning points!",
        },
      ];
      
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading"></p>
        <h1 className="primary-heading" >
          <ScrollAnimations>
          How EZWaste Works
          </ScrollAnimations>
          </h1>

        <p className="primary-text">
          <ScrollAnimations>
          Pack your waste, schedule pickup, wait for your driver, and earn points! Our hassle-free service transforms daily waste disposal and recycling by conveniently collecting from your doorstep.
          </ScrollAnimations>
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <ScrollAnimations>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
            </ScrollAnimations>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
