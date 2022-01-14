import React from "react";
import Avatars from "../../commons/Avatar";
import { Button } from "../../commons/Button";
import { imageAvatar } from "../../assets/imageAvatar";
import "./style.css";

export default function InfluencerCard({ image, influencerName }) {
  return (
    <div className="card_info_influencer">
      <img className="image" alt="Influencer_image" src={image} />
      <h3 className="influencer_card-name"> {influencerName} </h3>
      <div className="influencer_card-button-container">
        <Button width={150} title={"View Profile"} />
      </div>

      <div className="influencer_card-underLine" />
      <div className="influencer_card-Avatar-container">
        {imageAvatar.map((Avatar) => {
          return (
            <Avatars
              className="influencer_card-Avatar-container-Avatars"
              key={Avatar.key}
              image={Avatar.image}
            />
          );
        })}
      </div>
    </div>
  );
}
