import React from "react";
import { PayPalButton } from "react-paypal-button-v2";
import SteppersMui from "../StepersMui";
import "./style.css";

export default function PayPal({ price, onCreateOrder }) {
  return (
    <div className="influencerPayPal">
      <SteppersMui activeStep={2} />
      <div className="paypal-influencer-pay">
        <h1 className="payPalText">
          Pay<p className="paypalText-color"> Pal </p>
        </h1>
        <PayPalButton
          amount={price}
          country_code="EGP"
          shippingPreference="NO_SHIPPING"
          onSuccess={(details, data) => onCreateOrder(data)}
          options={{
            clientId:
              "ARfIZ621vXdLFUkwaNIN1I-ybEcsznrQQHCo5mh5ASUtowvzdunuAyCfHLDce-UGVe3kZJCgdDXNMFwA",
          }}
        />
      </div>
    </div>
  );
}
