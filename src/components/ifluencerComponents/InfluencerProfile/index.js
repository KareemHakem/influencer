import React from "react";
import InfluencerProfileLightSide from "../InfluencerProfile/InfluencerProfileLightSide";
import InfluencerProfileRightSide from "../InfluencerProfile/InfluencerProfileRightSide";
import "./style.css";

export default function InfluencerProfile({ influencerDetail }) {
  return (
    <div className="influencer_profile-container">
      <div className="influencer_profile-sides-container">
        <div className="influencer_profile-sides">
          <InfluencerProfileLightSide />
          <div style={{ marginTop: 200 }}> {influencerDetail.name} </div>
        </div>
        <div>
          <InfluencerProfileRightSide />
        </div>
      </div>
    </div>
  );
}
