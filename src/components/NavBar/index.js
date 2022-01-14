import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "./style.css";

export default function NavBar({ image, userName }) {
  return (
    <div className="influencer_navBar-container">
      <div className="influencer_navBar-container-flex" >
        <div className="influencer_navBar_link-container">
          <Link className="influencer_navBar_link-container-Link" to="/">
            LOGO
          </Link>
          <Link
            className="influencer_navBar_link-container-Link"
            to="influencer"
          >
            INFLUENCER
          </Link>
          <Link className="influencer_navBar_link-container-Link" to="favorite">
            FAVORITE
          </Link>
        </div>
        <div className="influencer_navBar-user-menu">
          <Stack direction="row" spacing={1}>
            <Chip
              className="influencer_navBar-Avatar"
              avatar={<Avatar alt="image-src" src={image} />}
              label={userName}
              variant="outlined"
            />
          </Stack>
        </div>
      </div>
    </div>
  );
}
