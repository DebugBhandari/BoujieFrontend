import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState, Items } from "../../types";
import "./index.css";
import { Link } from "react-router-dom";
import EachOrder from '../EachOrder'


export default function Order() {
  const userState = useSelector((state: AppState) => state.user);
  const { user } = userState;
  const orderState = useSelector((state: AppState) => state.order);
  const { orders } = orderState;
  const userOrders = orders.filter((p) => p.userId === user._id )
  console.log(orders)
 
  return (
    <div className="order-list">
      <h2>Orders:</h2>
    {userOrders.map((order) => (
      <ul><Link key={order._id} to={`/orders/${order._id}`}>{order._id}</Link></ul>
    ))}
  </div>
  );
}
