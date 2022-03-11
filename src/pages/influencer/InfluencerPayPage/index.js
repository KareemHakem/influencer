import React from "react";
import { useNavigate } from "react-router-dom";
import InfluencerPayInput from "../../../components/ifluencerComponents/InfluencerPayInput";

export default function InfluencerPayPage() {
  const Navigate = useNavigate();
  const handlePaySubmit = () => {
    Navigate("/user/selectPayment");
  };
  return (
    <div>
      <InfluencerPayInput handlePaySubmit={handlePaySubmit} />
    </div>
  );
}