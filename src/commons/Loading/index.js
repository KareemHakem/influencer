import React from "react";
import Lottie from "react-lottie";
import animation from "../../assets/json/loading.json";

export const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
  };

  return <Lottie options={defaultOptions} height={200} width={200} />;
};
