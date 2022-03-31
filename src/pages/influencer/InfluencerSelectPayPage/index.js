import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userSelectPayment } from "../../../redux/order/action";
import InfluencerSelectPayment from "../../../components/ifluencerComponents/InfluencerSelectPayment";

export default function InfluencerSelectPayPage() {
  const [payment, setPayment] = useState("");
  const {initialOrder} = useSelector(state => state.order)

  const dispatch = useDispatch()
  const Navigate = useNavigate();

  const handleFawryPayNavigate = () => setPayment("Fawry");

  const handlePayPalNavigate = () => setPayment("PayPal");

  const handlePayNavigate = () => {
    Navigate(`/placeOrder/${payment}`);

    dispatch(userSelectPayment({...initialOrder, paymentMethod: payment}))
  
  };
  return (
    <div>
      <InfluencerSelectPayment
        handleFawryPayNavigate={handleFawryPayNavigate}
        handlePayPalNavigate={handlePayPalNavigate}
        handlePayNavigate={handlePayNavigate}
        payment={payment}
      />
    </div>
  );
}
