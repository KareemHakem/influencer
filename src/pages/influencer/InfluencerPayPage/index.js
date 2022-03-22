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

  const handlePaySubmit = (values) => {
    navigate("/user/selectPayment");

    dispatch(initiateOrder({ ...values, date: Date.now() }));
    setTimeout(() => {
      dispatch(cancelOrder());
      navigate(`/influencer/${id}`);
      toast.error("please make sure to completed the order faster ");
    }, 50000);
  };

  return (
    <div>
      <InfluencerPayInput handlePaySubmit={handlePaySubmit} />
    </div>
  );
}

// unix Format
