import React from "react";
import SteppersMui from "../../StepersMui";
import FawryImage from "../../../assets/images/fawry.jpeg";
import PayPalImage from "../../../assets/images/paypal2.png";
import "./style.css";

export default function InfluencerSelectPayment({
  handleFawryPayNavigate,
  handlePayPalNavigate,
}) {
  return (
    <div className="influencerSelectPay">
      <div className="influencerSelectPayContainer">
        <SteppersMui activeStep={1} />
        <div className="influencerSelectPayCardContainer">
          <h2 className="texSelectPayCard"> Select Your Favorite Payment </h2>
          <div className="influencerPayCardContainer">
            <img
              className="imagePayCard"
              src={FawryImage}
              alt="FawryImage"
              onClick={handleFawryPayNavigate}
            />
            <img
              className="imagePayCard imagePayMargin"
              src={PayPalImage}
              alt="PayPalImage"
              onClick={handlePayPalNavigate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
