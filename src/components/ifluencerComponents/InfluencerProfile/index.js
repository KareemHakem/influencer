import React from "react";

import Sidebar from "../../NavBar/NavbarLightSide";
import SidebarPart from "../../NavBar/NavbarLightSide/sidebarPart";

import InfluencerProfileLightSide from "../InfluencerProfile/InfluencerProfileLightSide";
import InfluencerProfileRightSide from "../InfluencerProfile/InfluencerProfileRightSide";

import EditIcon from "@mui/icons-material/Edit";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import ChatIcon from "@mui/icons-material/Chat";
import "./style.css";

export default function InfluencerProfile({
  influencerDetail,
  handleNavigate,
  handleProfileNavigate,
  handleOrdersNavigate,
  handleChatNavigate,
}) {
  return (
    <div className="influencer_profile-container">
      <div className="influencer_profile-sides-container">
        <div className="influencer_profile-light-sides">
          <InfluencerProfileLightSide influencerDetail={influencerDetail} />
        </div>
        <div className="influencer_profile-right-side">
          <InfluencerProfileRightSide influencerDetail={influencerDetail} />
        </div>
      </div>
      <Sidebar>
        <SidebarPart
          onClick={handleProfileNavigate}
          Icon={AccountCircleIcon}
          title="profile"
        />
        <SidebarPart
          onClick={handleNavigate}
          Icon={EditIcon}
          title="Edit profile"
        />
        <SidebarPart
          onClick={handleOrdersNavigate}
          Icon={ChatIcon}
          title="Orders"
        />
        <SidebarPart
          onClick={handleChatNavigate}
          Icon={FormatListNumberedIcon}
          title="Chat"
        />
      </Sidebar>
    </div>
  );
}
