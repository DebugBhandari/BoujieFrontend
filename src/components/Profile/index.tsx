import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../types";
import "./index.css";
import { Link } from "react-router-dom";
import ThemeContext from "../../themeContext";

export default function Profile() {
  const userState = useSelector((state: AppState) => state.user);
  const { user } = userState;
  const { theme, switchTheme } = useContext(ThemeContext);
  const style = { backgroundColor: theme.color };

  return (
   <div className="profile-container" >
   <div className="profile" style={ style } >
      <img src={user.imageUrl} />
      <h2>{user.name}.</h2>
      <h3>{user.email}</h3>
      {user.isAdmin ? (
        <h2>
          <Link to="/postProduct">Post Products</Link>
        </h2>
      ) : (
        <span>Welcome to Boujie Apparels</span>
      )}
    </div>

    <div className="orders" style={ style }>
        <h1><Link to="/order">To orders</Link></h1>
    </div>
    </div>
  );
}
