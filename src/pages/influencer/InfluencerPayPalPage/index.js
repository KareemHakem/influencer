import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userCreteOrder } from "../../../redux/order/action";

import PayPal from "../../../components/PayPal";

export default function InfluencerPayPalPage() {
  const { initialOrder } = useSelector((state) => state.order);

  const dispatch = useDispatch();

  const onCreateOrder = (data) => {
    dispatch(userCreteOrder({...initialOrder, isPaid: true, paymentResult: data}));
  };

  return (
    <div className="InfluencerPayPalPage">
      <PayPal price={initialOrder?.totalPrice} onCreateOrder={onCreateOrder} />
    </div>
  );
}
 