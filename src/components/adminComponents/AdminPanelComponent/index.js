import React from "react";
import AdminPanelEditUsers from "../AdminPanelEditUsers";

import Sidebar from "../../NavBar/NavbarLightSide";
import SidebarPart from "../../NavBar/NavbarLightSide/sidebarPart";

import ReportIcon from "@mui/icons-material/Report";
import ChatIcon from "@mui/icons-material/Chat";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import "./style.css";
import { useSelector } from "react-redux";

export default function AdminPanelComponent({
  handleAdminUserNavigate,
  handleAdminOrderNavigate,
  handleAdminInfluencersNavigate,
  handleAdminReportNavigate,
  handleDeleteUsersNavigate,
  handleEditInputUsersNavigate,
}) {
  return (
    <>
      <div>
        <div>
          <AdminPanelEditUsers
            handleEditInputUsersNavigate={handleEditInputUsersNavigate}
            handleDeleteUsersNavigate={handleDeleteUsersNavigate}
          />
        </div>
      </div>

      <div>
        <Sidebar>
          <div className="user-sidebar-container-style">
            <SidebarPart
              onClick={handleAdminUserNavigate}
              Icon={AccountBoxIcon}
              title="Users"
            />
            <SidebarPart
              onClick={handleAdminInfluencersNavigate}
              Icon={AccountCircleIcon}
              title="Influencers"
            />
            <SidebarPart
              onClick={handleAdminOrderNavigate}
              Icon={FormatListNumberedIcon}
              title="Orders"
            />
            <SidebarPart
              onClick={handleAdminReportNavigate}
              Icon={ReportIcon}
              title="Report"
            />
            <SidebarPart
              onClick={handleAdminReportNavigate}
              Icon={ChatIcon}
              title="User Chat"
            />
            <SidebarPart
              onClick={handleAdminReportNavigate}
              Icon={ChatIcon}
              title="Influencer Chat"
            />
          </div>
        </Sidebar>
      </div>
    </>
  );
}
