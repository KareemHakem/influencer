import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import InfluencerPayInput from "../../../components/ifluencerComponents/InfluencerPayInput";
import { initiateOrder } from "../../../redux/order/action";


export default function InfluencerPayPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const date = Date.now()  // 151
  const dateAfterFiveMins = date + (5*60) // 150
  

// 151 < 150
  if (date < dateAfterFiveMins) {
    console.log("Selected date is in the past");

  } else {
    console.log("Selected date is NOT in the past");
  }
  const handlePaySubmit = (values) => {
    navigate("/user/selectPayment");
    console.log(values)


    dispatch(initiateOrder({...values, date: Date.now()}))  

  };
  return (
    <div>
      <InfluencerPayInput handlePaySubmit={handlePaySubmit} />
    </div>
  );
}

// unix Format
