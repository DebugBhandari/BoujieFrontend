import React, { useContext } from "react";
import {  Order } from "../../types";
import "./index.css";
import CombBtn from "../CombBtn";
import DetailsBtn from "../DetailsBtn";
import { useLocation, useParams } from 'react-router-dom'
import ThemeContext from "../../themeContext";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {AppState} from '../../types'
import OrderCard from '../Order'

export default function EachOrder({
  cartProducts,
  shippingAddress,
  userId,
  _id,
}: Order) {
  const EachOrder = {
    cartProducts,
    shippingAddress,
    userId,
    _id,
  };

  const location = useLocation()

  const dispatch = useDispatch();
  const history = useHistory();
  
  const user = useSelector((state: AppState)=> state.user.user)


  const {id} = useParams<{id:string}>()
 
  const orders = useSelector((state: AppState) => state.order.orders);
  const order = orders.find(order => order._id === id)


  if (order) {
    return (
     
        
        <div className="una">
          <OrderCard
            _id={order._id}
            key={order._id}
            shippingAddress={order.shippingAddress}
            userId={order.userId}
            cartProducts={order.cartProducts}
            
          />
        </div>
     
    );
  } else {
    return <div>Order not found</div>;
  }
}





