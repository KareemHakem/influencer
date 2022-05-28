import React from "react";
import "./style.css";

export default function InfluencerProfileLightSide({ influencerDetail }) {
  return (
    <div className="influencer_profile_light_side">
      <div className="influencer_profile_light_side-image">
        <img src={influencerDetail.image} alt="influencer_image" />
      </div>
      <div className="influencer_profile_light_side-description">
        <h3> {influencerDetail.name}</h3>
        <p> {influencerDetail.bio}</p>
      </div>
    </div>
  );
}
