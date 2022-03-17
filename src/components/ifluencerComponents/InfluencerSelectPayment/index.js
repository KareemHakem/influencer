import React from "react";
import SteppersMui from "../../StepersMui";
import FawryImage from "../../../assets/images/fawry.jpeg";
import PayPalImage from "../../../assets/images/paypal2.png";
import { Button } from "../../../commons/Button";
import "./style.css";

export default function InfluencerSelectPayment({
  handleFawryPayNavigate,
  handlePayPalNavigate,
  payment,
  handlePayNavigate,
}) {
  return (
    <div className="influencerSelectPay">
      <div className="influencerSelectPayContainer">
        <SteppersMui activeStep={1} />
        <div className="influencerSelectPayCardContainer">
          <h2 className="texSelectPayCard"> Select Your Favorite Payment </h2>
          <div className="influencerPayCardContainer">
            <img
              className={payment === "Fawry" ? "imagePayCardFawry" : "Fawry"}
              src={FawryImage}
              alt="FawryImage"
              onClick={handleFawryPayNavigate}
            />
            <img
              className={payment === "payPal" ? "imagePayCardPaypal" : "Paypal"}
              src={PayPalImage}
              alt="PayPalImage"
              onClick={handlePayPalNavigate}
            />
          </div>
          <Button
            title="create"
            type="submit"
            disabled={payment === ""}
            width={100}
            onClick={handlePayNavigate}
          />
        </div>
      </div>
    </div>
  );
}
