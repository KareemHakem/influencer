import React from "react";
import InfluencerProfileLightSide from "../InfluencerProfile/InfluencerProfileLightSide";
import InfluencerProfileRightSide from "../InfluencerProfile/InfluencerProfileRightSide";
import "./style.css";

export default function InfluencerProfile({ influencerDetail }) {
  return (
    <div className="influencer_profile-container">
      <div className="influencer_profile-sides-container">
        <div className="influencer_profile-light-sides">
          <InfluencerProfileLightSide influencerDetail={influencerDetail} />
        </div>
        <div className="influencer_profile-right-side">
          <InfluencerProfileRightSide influencerDetail={influencerDetail} />
        </div>
      </div>
    </div>
  );
}
