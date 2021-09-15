
  import React, { useContext } from "react";
  import {  Order } from "../../types";
  import CombBtn from "../CombBtn";
  import DetailsBtn from "../DetailsBtn";
  import { useLocation, useParams } from 'react-router-dom'
  import ThemeContext from "../../themeContext";
  import { useDispatch, useSelector } from "react-redux";
  import { useHistory } from "react-router-dom";
  import {AppState} from '../../types'
  import "./index.css";
  
  export default function EachOrder({
    cartProducts,
    shippingAddress,
    userId,
    _id,
  }: Order) {
   
  
    const location = useLocation()
  
    const dispatch = useDispatch();
    const history = useHistory();
    console.log(cartProducts)
    
    const user = useSelector((state: AppState)=> state.user.user)
  return (
    <div className="order1" style={{ margin: "15px" }}>
        
      <div className="order2" key={user._id}>
        <div >
          <h3>Order id:{_id}</h3>
        
        <div className="order3">{user.name}

        {cartProducts.map((product) => (
         
            <div key={product.productId}><img src={product.imageUrl}/><h4>{product.price}x{product.quantity}</h4></div>
         
        ))}</div>
      </div></div>
      <div className="shipping">
      
         <div >{shippingAddress.fullName}<br/>{shippingAddress.address}<br/>{shippingAddress.city}</div>
      
     
        
    </div>
  </div>
  );
}
