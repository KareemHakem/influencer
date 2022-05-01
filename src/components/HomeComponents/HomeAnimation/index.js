import React from "react";
import Lottie from "react-lottie";
import animation from "../../../assets/json/homeAnimation.json";
import animation2 from "../../../assets/json/arrowAnimation.json";
import animation3 from "../../../assets/json/influencerAnimation.json";
import animation4 from "../../../assets/json/shadowTextAnimation.json";
import { Button } from "../../../commons/Button";
import "./style.css";

export const HomeAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
  };
  return (
    <div className="homePageAnimation">
      <Lottie options={defaultOptions} />
    </div>
  );
};

export const HomeArrowAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation2,
  };
  return (
    <div className="homePageAnimation">
      <Lottie options={defaultOptions} />
    </div>
  );
};

export const InfluencerAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation3,
  };
  return (
    <div className="homePageAnimation">
      <Lottie options={defaultOptions} />
    </div>
  );
};

export const ShadowTextAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation4,
  };
  return (
    <div>
      <Lottie options={defaultOptions} />
    </div>
  );
};
