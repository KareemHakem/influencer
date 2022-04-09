import React from "react";
import { Link } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import { Icons } from "../../../assets/Icons";
import "./style.css";

export default function NavBarRightSide({
  isAuthenticated,
  handleUserAuthLogout,

  handleUserClickMenu,
  currentUser,
}) {
  return (
    <div>
      {isAuthenticated ? (
        <>
          <div
            className="influencer_navBar-user-menu"
            onClick={handleUserClickMenu}
          >
            <Stack direction="row" spacing={1}>
              <Chip
                className="influencer_navBar-Avatar"
                avatar={<Avatar alt="image-src" src={""} />}
                label={currentUser?.name}
                variant="outlined"
              />
            </Stack>
          </div>
          <div className="menu_nave_screen">
            <Icons.MenuOpenIcon onClick={handleUserClickMenu} />
          </div>
        </>
      ) : (
        <>
          <Link className="influencer_navBar_link-container-Link_login" to="Login">
            LOGIN
          </Link>
        </>
      )}
    </div>
  );
}
