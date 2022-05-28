import React from "react";
import Lottie from "react-lottie";
import animation from "../../../assets/json/loginAnimation.json";


export const LoginAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
  };
  return (
    <div className="loginAnimationPage">
      <Lottie options={defaultOptions} />
    </div>
  );
};
