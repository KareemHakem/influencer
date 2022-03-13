import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function UserMenu({ handleUserAuthLogout }) {
  return (
    <div className=" menu_container">
      <div className=" menu_container scale-up-center">
        <ul className="dropdown_menu">
          <li className="dropdown_item-1">
            <Link className="UserMenuLink" to={`/user-profile/user.id`}>
              Account
            </Link>
          </li>
          <li className="dropdown_item-1">
            <Link className="UserMenuLink" to="/user-order">
              Orders
            </Link>
          </li>
          <li onClick={handleUserAuthLogout} className="dropdown_item-2">
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
}
