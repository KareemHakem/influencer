import React from "react";
import image from "../../assets/images/error_404.png";
import "./style.css";

export const Error = ({ message = "ERROR 404 REFRESH YOU PAGE " }) => {
  return (
    <div className="influencer_error-container">
      <div className="influencer_error-image-container">
        <img src={image} alt="image_error" />
      </div>
      <div className="influencer_error-text-container">
        <h1>{message} </h1>
      </div>
    </div>
  );
};
