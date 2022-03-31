import React from "react";
import { useSelector } from "react-redux";
import PayPal from "../../../components/PayPal";

export default function InfluencerPayPalPage() {
  const {initialOrder} = useSelector(state => state.order)
  console.log(initialOrder?.totalPrice)
  return (
    <div className="InfluencerPayPalPage"  >
      <PayPal price={initialOrder?.totalPrice} />
    </div>
  );
}
