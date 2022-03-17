import React from "react";

import { types, userTypes } from "./types";

import UserMenu from "./UserMenu";
import InfluencerMenu from "./InfluencerMenu";
import AdminMenu from "./AdminMenu";

export default function NavbarMenus({
  currentUser,
  handleUserAuthLogout,
  handleClickToggle,
}) {
  switch (userTypes(currentUser)) {
    case types.isAdmin:
      return (
        <AdminMenu
          handleClickAdmin={handleClickToggle}
          handleUserAuthLogout={handleUserAuthLogout}
        />
      );
    case types.Influencer:
      return (
        <InfluencerMenu
          currentUser={currentUser}
          handleUserAuthLogout={handleUserAuthLogout}
          handleClickInfluencer={handleClickToggle}
        />
      );
    case types.AdminAndInfluencer:
      return <div></div>;
    case types.User:
      return (
        <UserMenu
          handleClickUser={handleClickToggle}
          handleUserAuthLogout={handleUserAuthLogout}
        />
      );
    default:
      return <></>;
  }
}
