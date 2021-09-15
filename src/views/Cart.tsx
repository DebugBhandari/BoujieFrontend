import React, { useEffect, useContext } from "react";
import CartCard from "../components/CartCard";
import ShippingAddressComp from "../components/ShippingAddressComp";
import { AppState, Product } from "../types";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import { Link } from "react-router-dom";
import ThemeContext, { themes } from "../themeContext";

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state: AppState) => state.cart.cartProducts);
  useEffect(() => {
    localStorage.setItem("currentCart", JSON.stringify(products));
  }, [dispatch]);

  const { theme, switchTheme } = useContext(ThemeContext);
  const style = { backgroundColor: theme.color };

  if (products.length !== 0) {
    return (
      <div className="crdd" style={style}>
        <h1>Cart</h1>
        <div className="cartcont">
          <div className="cartCard">
            {products.map((product) => (
              <CartCard
                _id={product._id}
                key={product.name}
                imageUrl={product.imageUrl}
                name={product.name}
                description={product.description}
                brand={product.brand}
                category={product.category}
                price={product.price}
                countInStock={product.countInStock}
                quantity={product.quantity}
              />
            ))}
          </div>
          <div className="address">
            <ShippingAddressComp />
          </div>
        </div>
      </div>
    );
  }
  {
    return (
      <div>
        <div className="crt" style={style}>
          <h1>Your Cart is empty. </h1>
        </div>
      </div>
    );
  }
}
