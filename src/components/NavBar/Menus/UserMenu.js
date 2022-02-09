import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function UserMenu() {
  return (
    <div className=" menu_container">
      <div className=" menu_container scale-up-center">
        <ul className="dropdown_menu">
          <li className="dropdown_item-1">
            <Link to="/profile">Profile </Link>
          </li>
          <li className="dropdown_item-1">
            <Link to="/orders">Orders</Link>
          </li>
          <li className="dropdown_item-1">
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
}
