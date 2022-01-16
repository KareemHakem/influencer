import React from "react";
import Lottie from "react-lottie";
import animation from "../../../assets/json/homeAnimation.json";

export const HomeAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
  };
  return <Lottie options={defaultOptions} height={450} width={450} />;
};