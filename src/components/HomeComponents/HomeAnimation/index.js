import React from "react";
import Lottie from "react-lottie";
import animation from "../../../assets/json/homeAnimation.json";
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
