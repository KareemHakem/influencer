import React from "react";

import { types, userTypes } from "./types";

import UserMenu from "./UserMenu";
import AdminMenu from "./AdminMenu";
import InfluencerMenu from "./InfluencerMenu";
import AdminInfluencerMenu from "./AdminInfluencerMenu";

export default function NavbarMenus({
  currentUser,
  handleUserAuthLogout,
  handleClickToggle,
  setDisplayMenu,
}) {
  switch (userTypes(currentUser)) {
    case types.isAdmin:
      return (
        <AdminMenu
          handleClickAdmin={handleClickToggle}
          handleUserAuthLogout={handleUserAuthLogout}
          setDisplayMenu={setDisplayMenu}
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
      return (
        <AdminInfluencerMenu
          currentUser={currentUser}
          handleClickAdmin={handleClickToggle}
          handleUserAuthLogout={handleUserAuthLogout}
          handleClickInfluencer={handleClickToggle}
        />
      );
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
