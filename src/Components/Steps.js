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
          text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
        },
        {
          image: TapButton,
          title: "Schedule your delivery",
          text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
        },
        {
          image: CarDelivery,
          title: "Wait for your driver",
          text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
        },
        {
          image: GetRewarded,
          title: "Get rewarded with points!",
          text: "Loremdolor sit amet consectetur. Maecenas orci et lorem ipsum",
        },
      ];
      
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading"></p>
        <h1 className="primary-heading" >How EZWaste Works</h1>

        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
