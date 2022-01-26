import React from "react";

import { types, userTypes } from "./types";

import UserMenu from "./UserMenu";
import InfluencerMenu from "./InfluencerMenu";
import AdminMenu from "./AdminMenu";

export default function NavbarMenus({ currentUser }) {

  switch (userTypes(currentUser)) {
    case types.Admin:
      return <AdminMenu />;
    case types.Influencer:
      return <InfluencerMenu />;
    case types.User:
      return <UserMenu />;
    default:
      return <></>;
  }
}
