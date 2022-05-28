import React from "react";
import InfluencerCategory from "../InfluencerCategory";
import "./style.css";

export default function InfluencerBio({ influencer }) {
  return (
    <div className="Influencer-bio-container">
      <div className="Influencer-bio-text">
        <h3> About {influencer.name} </h3>
        <p> {influencer.bio} </p>

        <div className="Influencer-bio-interests">
          <h3> Interests </h3>
          <InfluencerCategory influencer={influencer} />
        </div>
      </div>
    </div>
  );
}
