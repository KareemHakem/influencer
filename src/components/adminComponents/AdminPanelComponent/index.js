import React from "react";
import AdminPanelEditUsers from "../AdminPanelEditUsers";

import Sidebar from "../../NavBar/NavbarLightSide";
import SidebarPart from "../../NavBar/NavbarLightSide/sidebarPart";
import { Icons } from "../../../assets/Icons";

import "./style.css";

export default function AdminPanelComponent({
  handleAdminUserNavigate,
  handleAdminOrderNavigate,
  handleAdminInfluencersNavigate,
  handleAdminReportNavigate,
  handleEditInputUsersNavigate,
  handleAdminDeleteUsers,
  users,
}) {
  return (
    <>
      <div>
        <div>
          <AdminPanelEditUsers
            users={users}
            handleEditInputUsersNavigate={handleEditInputUsersNavigate}
            handleAdminDeleteUsers={handleAdminDeleteUsers}
          />
        </div>
      </div>

      <div>
        <Sidebar>
          <div className="user-sidebar-container-style">
            <SidebarPart
              onClick={handleAdminUserNavigate}
              Icon={() => <Icons.PersonIcon className="sideBarIcon" />}
              title="Users"
            />
            <SidebarPart
              onClick={handleAdminInfluencersNavigate}
              Icon={() => <Icons.GroupIcon className="sideBarIcon" />}
              title="Influencer"
            />
            <SidebarPart
              onClick={handleAdminOrderNavigate}
              Icon={() => (
                <Icons.FormatListNumberedIcon className="sideBarIcon" />
              )}
              title="Orders"
            />
            <SidebarPart
              onClick={handleAdminReportNavigate}
              Icon={() => <Icons.ReportIcon className="sideBarIcon" />}
              title="Report"
            />
            <SidebarPart
              onClick={handleAdminReportNavigate}
              Icon={() => <Icons.ChatIcon className="sideBarIcon" />}
              title="User Chat"
            />
            <SidebarPart
              onClick={handleAdminReportNavigate}
              Icon={() => <Icons.ChatIcon className="sideBarIcon" />}
              title="Influencer Chat"
            />
          </div>
        </Sidebar>
      </div>
    </>
  );
}
