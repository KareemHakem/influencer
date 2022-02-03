import React from "react";
import { Button } from "../../../commons/Button";
import InfluencerProfileLightSide from "../InfluencerProfile/InfluencerProfileLightSide";
import InfluencerProfileRightSide from "../InfluencerProfile/InfluencerProfileRightSide";
import "./style.css";

export default function InfluencerProfile({
  influencerDetail,
  handleNavigate,
}) {
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
      <Button onClick={handleNavigate} />
    </div>
  );
}
