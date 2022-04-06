import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getOrders} from '../../../redux/getOrders/action'

export default function UserGetOrders() {
  const {orders} = useSelector(state => state.getOrders)

  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getOrders())
  },[dispatch])

  console.log(orders)

  return <div style={{ marginTop: 100 }}>UserOrdersPage</div>;
}
