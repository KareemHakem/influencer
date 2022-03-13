import React from "react";
import { useNavigate } from "react-router-dom";
import InfluencerSelectPayment from "../../../components/ifluencerComponents/InfluencerSelectPayment";

export default function InfluencerSelectPayPage() {
  const Navigate = useNavigate();
  const handleFawryPayNavigate = () => {
    Navigate(`/placeOrder/payPal`);
  };
  const handlePayPalNavigate = () => {
    Navigate(`/placeOrder/payPal`);
  };
  return (
    <div>
      <InfluencerSelectPayment
        handleFawryPayNavigate={handleFawryPayNavigate}
        handlePayPalNavigate={handlePayPalNavigate}
      />
    </div>
  );
}
