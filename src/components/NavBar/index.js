import React from "react";
import { Link } from "react-router-dom";

import { authLogoutUserReducer } from "../../redux/auth/action";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "./style.css";

export default function NavBar({ image, userName }) {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleUserAuthLogout = () => {
    dispatch(authLogoutUserReducer());
  };
  return (
    <div className="influencer_navBar-container">
      <div className="influencer_navBar-container-flex">
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
          {isAuthenticated ? (
            <div onClick={handleUserAuthLogout}>LOGOUT</div>
          ) : (
            <>
              <Link
                className="influencer_navBar_link-container-Link"
                to="LoginPage"
              >
                LOGIN
              </Link>
              <Link
                className="influencer_navBar_link-container-Link"
                to="RegisterPage"
              >
                REGISTER
              </Link>
            </>
          )}
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
