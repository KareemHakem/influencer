import React from "react";

import Sidebar from "../../NavBar/NavbarLightSide";
import SidebarPart from "../../NavBar/NavbarLightSide/sidebarPart";

import UserInputInfo from "../UserInputInfo";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./style.css";

export default function UserProfile({
  handleProfileNavigate,
  handleOrdersProfileNavigate,
  handleFavoriteProfileNavigate,
}) {
  return (
    <div>
      <div>
        <div>
          <UserInputInfo />
        </div>
      </div>

      <Sidebar>
        <div className="user-sidebar-container-style">
          <div className="userSideParStyle">
            <SidebarPart
              onClick={handleProfileNavigate}
              Icon={AccountCircleIcon}
              title="profile"
            />
          </div>
          <div className="userSideParStyle">
            <SidebarPart
              onClick={handleOrdersProfileNavigate}
              Icon={FormatListNumberedIcon}
              title="Orders"
            />
          </div>
          <div className="userSideParStyle">
            <SidebarPart
              onClick={handleFavoriteProfileNavigate}
              Icon={FavoriteBorderIcon}
              title="Favorite"
            />
          </div>
        </div>
      </Sidebar>
    </div>
  );
}
