import React from "react";

import { types, userTypes } from "./types";

import UserMenu from "./UserMenu";
import InfluencerMenu from "./InfluencerMenu";
import AdminMenu from "./AdminMenu";


export default function NavbarMenus({ currentUser, handleUserAuthLogout, handleToggle }) {


  // const handleAllMenuFunctionality = (url) =>{
  //   handleToggle()
  //   Navigate(url)
  // }
 

  switch (userTypes(currentUser)) {
    case types.isAdmin:
      return <AdminMenu  handleUserAuthLogout={handleUserAuthLogout} />;
    case types.Influencer:
      return (
        <InfluencerMenu
          currentUser={currentUser}
          handleUserAuthLogout={handleUserAuthLogout}
        />
      );
    case types.AdminAndInfluencer:
      return <div></div>;
    case types.User:
      return <UserMenu  handleUserAuthLogout={handleUserAuthLogout} />;
    default:
      return <></>;
  }
}
