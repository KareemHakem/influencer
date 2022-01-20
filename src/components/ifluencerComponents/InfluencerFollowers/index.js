import React from "react";
import { Icons } from "../../../assets/Icons";
import IconButton from "@mui/material/IconButton";

import "./style.css";

export default function InfluencerFollowers({ influencer }) {
  return (
    <div className="influencer_followers-container">
      <div className="influencer_followers-container-inst">
        <div className="influencer_followers-container-icon">
          <IconButton size="small">
            <Icons.InstagramIcon style={{ color: "#707070" }} />
          </IconButton>
          <p> {influencer.instFollowers} </p>
        </div>
        <div className="influencer_followers_text">
          <p> Followers </p>
          <div className="Vertical_Line_user_Info"></div>
        </div>
      </div>
      <div className="influencer_followers-container-inst">
        <div className="influencer_followers-container-icon">
          <IconButton size="small">
            <Icons.FacebookIcon style={{ color: "#707070" }} />
          </IconButton>
          <p> {influencer.fbFriends} </p>
        </div>
        <div className="influencer_followers_text">
          <p> Friends </p>
          <div className="Vertical_Line_user_Info"></div>
        </div>
      </div>
      <div className="influencer_followers-container-inst">
        <div className="influencer_followers-container-icon">
          <IconButton size="small">
            <Icons.YouTubeIcon style={{ color: "#707070" }} />
          </IconButton>
          <p> {influencer.youtubeSubscribers} </p>
        </div>
        <div className="influencer_followers_text">
          <p> subscriber </p>
        </div>
      </div>
    </div>
  );
}

//instFollowers  fbFriends  youtubeSubscribers
