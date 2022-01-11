import React from "react";
import Avatars from "../../commons/Avatar";
import Button from "../../commons/Button";
import "./style.css";
export default function InfluencerCard({ image }) {
  return (
    <div className="card_info_influencer">
      <img className="image" alt="Influencer_image" src={image} />
      <Button width={150} title={"View Profile"} />
      <div className="underLine-card" />
      <Avatars />
      <Avatars />
      <Avatars />
    </div>
  );
}
