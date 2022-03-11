import React from "react";
import InfluencerSelectPayment from "../../../components/ifluencerComponents/InfluencerSelectPayment";

export default function InfluencerSelectPayPage() {
  const handleFawryPayNavigate = () => {};
  const handlePayPalNavigate = () => {};
  return (
    <div>
      <InfluencerSelectPayment
        handleFawryPayNavigate={handleFawryPayNavigate}
        handlePayPalNavigate={handlePayPalNavigate}
      />
    </div>
  );
}
