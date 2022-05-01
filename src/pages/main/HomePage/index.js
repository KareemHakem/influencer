import React from "react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import { HomeAnimation } from "../../../components/HomeComponents/HomeAnimation";
import { HomeArrowAnimation } from "../../../components/HomeComponents/HomeAnimation";
import { InfluencerAnimation } from "../../../components/HomeComponents/HomeAnimation";
import { ShadowTextAnimation } from "../../../components/HomeComponents/HomeAnimation";

import HomeText from "../../../components/HomeComponents/HomeText";

import "./style.css";

export default function HomePage() {
  const { currentUser } = useSelector((state) => state.auth);
  const Navigate = useNavigate();

  console.log(currentUser);

  const handleUserInfluencerNavigate = () => {
    Navigate("/influencer");
  };

  return (
    <div className="homePage">
      <div className="home-page-Animation">
        <div className="home-page-Animation_container">
          <HomeText
            handleUserInfluencerNavigate={handleUserInfluencerNavigate}
          />
          <HomeAnimation />
        </div>
        <div className="home-page-animation-arrow">
          <HomeArrowAnimation />
        </div>
        <div className="home-page-Animation-info_part">
          <InfluencerAnimation />
          <div className="animation">
            <ShadowTextAnimation />
            <div className="descriptionTextAnimation">
              <h1> Connect with all Influencer </h1>
              <p>
                In any easy way, you can communicate with all famous people on
                social media to order everything you wish for with easy and safe
                payment methods
              </p>
            </div>
          </div>
        </div>
        <div style={{ height: 50 }}></div>
      </div>
    </div>
  );
}
