import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { initiateOrder } from "../../../redux/order/action";
import { cancelOrder } from "../../../redux/order/action";

import InfluencerPayInput from "../../../components/ifluencerComponents/InfluencerPayInput";

export default function InfluencerPayPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const date = Date.now(); // 151
  const dateAfterFiveMins = date + 5 * 60; // 150

  // 151 < 150
  if (date < dateAfterFiveMins) {
    console.log("Selected date is in the past");
  } else {
    console.log("Selected date is NOT in the past");
  }
  const handlePaySubmit = (values) => {
    navigate("/user/selectPayment");

    dispatch(
      initiateOrder({ ...values, date: Date.now() }),
      setTimeout(() => {
        cancelOrder();
        navigate(`/influencer/${id}`);
        toast.error("please make sure to completed the order faster ");
      }, 10000)
    );
    console.log(values);
  };

  return (
    <div>
      <InfluencerPayInput handlePaySubmit={handlePaySubmit} />
    </div>
  );
}

// unix Format
