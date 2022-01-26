import React, { useState } from "react";
import { Link } from "react-router-dom";

import { authLogoutUserReducer } from "../../redux/auth/action";
import { useSelector, useDispatch } from "react-redux";

import NavBarRightSide from "./NavBarRightSide";
import NavbarMenus from "./Menus";

import "./style.css";

export default function NavBar() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const { isAuthenticated, currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleUserAuthLogout = () => {
    dispatch(authLogoutUserReducer());
  };

  const handleUserClickMenu = () => {
    setDisplayMenu(!displayMenu);
  };

  return (
    <>
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
            <Link
              className="influencer_navBar_link-container-Link"
              to="favorite"
            >
              FAVORITE
            </Link>
          </div>

          <NavBarRightSide
            handleUserClickMenu={handleUserClickMenu}
            isAuthenticated={isAuthenticated}
            currentUser={currentUser}
            displayMenu={displayMenu}
          />
        </div>
      </div>
      <div
        style={{
          right: 20,
          zIndex: 1000,
          top: 55,
          position: "fixed",
        }}
      >
        {displayMenu && <NavbarMenus currentUser={currentUser} />}
      </div>
    </>
  );
}
