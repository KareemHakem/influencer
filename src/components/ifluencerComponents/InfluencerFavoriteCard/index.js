import React from "react";
import { Button } from "../../../commons/Button";
import "./style.css";

export default function InfluencerFavoriteCard({
  influencer,
  name,
  email,
  cont,
  image,
}) {
  return (
    <div className="influencer_favorite_card-container">
      <div className="influencer_card-image">
        <img src={image} alt="imageInfluencer" />
      </div>

      <div>
        <div className="influencer_favorite_card-text">
          <p className="influencer-text-p"> Name </p>
          <p> {name} </p>
        </div>
        <div className="line-favorite-card" />
        <div className="influencer_favorite_card-text">
          <p className="influencer-text-p"> Email </p>
          <p> {email} </p>
        </div>
        <div className="line-favorite-card" />
        <div className="influencer_favorite_card-text">
          <p className="influencer-text-p"> Count </p>
          <p> {cont} </p>
        </div>

        <div className="influencer_favorite_card-btn">
          <Button
            className="influencer_send_message"
            width={"100%"}
            title="Send Massage"
          />
          <Button width={"100%"} title="Send Massage" />
        </div>
      </div>
    </div>
  );
}
