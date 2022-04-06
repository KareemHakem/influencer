import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { initiateOrder } from "../../../redux/order/action";
import { cancelOrder } from "../../../redux/order/action";

import InfluencerPayInput from "../../../components/ifluencerComponents/InfluencerPayInput";
import { PackagesOptions } from "../../../assets/data/packagesOptions";

export default function InfluencerPayPage() {
  const { currentUser } = useSelector((state) => state.auth);
 
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const handlePaySubmit = (values) => {
    navigate("/user/selectPayment");

    const price = PackagesOptions.find(
      (item) => item.value === values.package
    )?.price;

    const fee = (Number(price) * 10) / 100;
    const totalPrice = fee + Number(price);

    dispatch(
      initiateOrder({
        ...values,
        influencer: id,
        user: currentUser._id,
        price: Number(price),
        totalPrice,
        fee,
      })
    );

    // Refresh Issue
    // User finish the order
    setTimeout(() => {
      dispatch(cancelOrder());
      navigate(`/influencer/${id}`);
      toast.error("Order has been canceled");
    }, 10000);

  };

  return (
    <div>
      <InfluencerPayInput
        currentUser={currentUser}
        handlePaySubmit={handlePaySubmit}
      />
    </div>
  );
}
