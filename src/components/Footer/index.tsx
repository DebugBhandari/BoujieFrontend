import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Cart from "../../svg/cart.svg";
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../types'
import "./index.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { userToken } from '../../redux/actions/user'
import ThemeContext, {themes} from '../../themeContext'

export default function Footer() {
  const userState = useSelector((state: AppState) => state.user)
  const { user, isAuthenticated } = userState
  const cartValue = useSelector((state: AppState) => state.cart.cartProducts.length)


  const { theme, switchTheme } = useContext(ThemeContext)

  const style = { backgroundColor: theme.color}


 

  return (
   <div className="navbar" style={style}>
       
   </div>  
   
  );
}
