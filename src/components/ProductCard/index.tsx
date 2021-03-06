import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { CardDeck } from "react-bootstrap";
import {  Product } from "../../types";
import "./index.css";
import CombBtn from "../CombBtn";
import DetailsBtn from "../DetailsBtn";
import { useLocation } from 'react-router-dom'
import ThemeContext from "../../themeContext";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {AppState} from '../../types'

export default function ProductCard({
  _id,
  imageUrl,
  name,
  brand,
  category,
  description,
  price,
  countInStock,
  quantity
}: Product) {
  const product = {
    _id,
    imageUrl,
    name,
    brand,
    category,
    description,
    price,
    countInStock,
    quantity
  };

  const location = useLocation()

  const dispatch = useDispatch();
  const history = useHistory();
  const viewProduct = () => {
    history.push(`/products/${_id}`);
  };

  const { theme, switchTheme } = useContext(ThemeContext);
  const style = { backgroundColor: theme.color };
 
  const products = useSelector((state: AppState) => state.cart.cartProducts);

  return (
    <div style={{ margin: "15px" }} className="card-deck" >
      <div key="name" className="cardIn">
        <img src={imageUrl} onClick={viewProduct}/>

        <div className="card-body" >
          <div>
            <h3>{name}</h3>
          </div>
          <div>{description}</div>
        </div>
        <div className="btn-cntnr">
          <h4>{brand}</h4>
          <h4>{price}€</h4>
          <div className="btns">
            <CombBtn
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
            <DetailsBtn viewProduct={viewProduct} />
          </div>
        </div>
      </div>
    </div>
  );
}
