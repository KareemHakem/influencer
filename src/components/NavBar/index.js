import React from "react";
import { Link } from "react-router-dom";

import { authLogoutUserReducer } from "../../redux/auth/action";
import { useSelector, useDispatch } from "react-redux";

import NavBarRightSide from "./NavBarRightSide";
import "./style.css";

export default function NavBar() {
  const { isAuthenticated, currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleUserAuthLogout = () => {
    dispatch(authLogoutUserReducer());
  };
  return (
    <div className="influencer_navBar-container">
      <div className="influencer_navBar-container-flex">
        <div className="influencer_navBar_link-container">
          <Link className="influencer_navBar_link-container-Link" to="/">
            LOGO
          </Link>
          <Link
            className="influencer_navBar_link-container-Link"
            to="influencer"
          >
            INFLUENCER
          </Link>
          <Link className="influencer_navBar_link-container-Link" to="favorite">
            FAVORITE
          </Link>
        </div>
        <NavBarRightSide
          handleUserAuthLogout={handleUserAuthLogout}
          isAuthenticated={isAuthenticated}
          currentUser={currentUser}
        />
      </div>
    </div>
  );
}
