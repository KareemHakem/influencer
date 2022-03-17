import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InfluencerSelectPayment from "../../../components/ifluencerComponents/InfluencerSelectPayment";

export default function InfluencerSelectPayPage() {
  const [payment, setPayment] = useState("");
  const Navigate = useNavigate();

  const handleFawryPayNavigate = () => setPayment("Fawry");

  const handlePayPalNavigate = () => setPayment("payPal");

  const handlePayNavigate = () => {
    Navigate(`/placeOrder/${payment}`);
  };
  return (
    <div>
      <InfluencerSelectPayment
        handleFawryPayNavigate={handleFawryPayNavigate}
        handlePayPalNavigate={handlePayPalNavigate}
        payment={payment}
        handlePayNavigate={handlePayNavigate}
      />
    </div>
  );
}
