import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alerts } from "../../../commons/Alert";
import { getOrders } from "../../../redux/getOrders/action";

export default function InfluencerGetOrders() {
  const { orders } = useSelector((state) => state.getOrders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  console.log(orders);
  if (orders.length === 0) {
    return (
      <div className="alertCardFavoritePage">
        <Alerts alertText="You dont have any orders" />
      </div>
    );
  }
}
