import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function AdminInfluencerMenu({
  handleUserAuthLogout,
  currentUser,
  handleClickInfluencer,
  handleClickAdmin,
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
          <li className="dropdown_item-1">
            <Link
              onClick={handleClickInfluencer}
              to={`/profile-influencer/${currentUser._id}`}
            >
              Profile
            </Link>
          </li>
          <li className="dropdown_item-1">
            <Link onClick={handleClickInfluencer} to="/influencer-orders">
              Orders
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
 