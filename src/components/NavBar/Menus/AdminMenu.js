import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../../../assets/Icons";
import "./style.css";

export default function AdminMenu({
  handleUserAuthLogout,
  handleClickAdmin,
  setDisplayMenu,
}) {
  return (
    <div className=" menu_container">
      <div className=" menu_container scale-up-center">
        <ul className="dropdown_menu">
         
          <li className="dropdown_item-1">
            <Link onClick={handleClickAdmin} to="/manage-admin-panel">
              Admin Panel
            </Link>
          </li>
          <li onClick={handleUserAuthLogout} className="dropdown_item-1">
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
}
