import React from "react";

import { types, userTypes } from "./types";

import UserMenu from "./UserMenu";
import InfluencerMenu from "./InfluencerMenu";
import AdminMenu from "./AdminMenu";

export default function NavbarMenus({ currentUser, handleUserAuthLogout }) {
  console.log(userTypes(currentUser));
  switch (userTypes(currentUser)) {
    case types.Admin:
      return <AdminMenu handleUserAuthLogout={handleUserAuthLogout} />;
    case types.Influencer:
      console.log("YESSS");
      return (
        <InfluencerMenu
          currentUser={currentUser}
          handleUserAuthLogout={handleUserAuthLogout}
        />
      );
    case types.AdminAndInfluencer:
      console.log("WOWOWOW");
      return <div></div>;
    case types.User:
      return <UserMenu handleUserAuthLogout={handleUserAuthLogout} />;
    default:
                                  console.log('WTF')
      return <></>;
  }
}
