import React from "react";
import Lottie from "react-lottie";
import animation from "../../assets/json/loading.json";
import "./style.css";

export const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
  };

  return (
    <>
      <div className="influencer-loading_container">
        <Lottie
       
          options={defaultOptions}
          height={300}
          width={300}
        />
      </div>
    </>
  );
};
