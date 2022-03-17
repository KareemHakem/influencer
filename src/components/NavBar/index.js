import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { authLogoutUserReducer } from "../../redux/auth/action";
import { useSelector, useDispatch } from "react-redux";

import NavBarRightSide from "./NavBarRightSide";
import NavbarMenus from "./Menus";

import "./style.css";

export default function NavBar() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const { isAuthenticated, currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToggle = () => {
    setDisplayMenu(!displayMenu);
  };

  const handleUserAuthLogout = () => {
    dispatch(authLogoutUserReducer());
    navigate("/");
    handleToggle();
  };

  const handleClickToggle = () => {
    handleToggle();
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
            handleUserClickMenu={handleToggle}
            isAuthenticated={isAuthenticated}
            currentUser={currentUser}
            displayMenu={displayMenu}
          />
        </div>
      </div>
      <div className="menu_navbar_user">
        {displayMenu && (
          <NavbarMenus
            handleUserAuthLogout={handleUserAuthLogout}
            currentUser={currentUser}
            handleClickToggle={handleClickToggle}
          />
        )}
      </div>
    </>
  );
}
