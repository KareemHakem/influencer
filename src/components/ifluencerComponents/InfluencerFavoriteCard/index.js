import React from "react";
import { Button } from "../../../commons/Button";
import "./style.css";

export default function InfluencerFavoriteCard({ influencer }) {
  return (
    <div className="influencer_favorite_card-container">
      <div className="influencer_card-image">
        <img src={influencer.image} alt="imageInfluencer" />
      </div>
      <div className="influencer_favorite_card-text-container">
        <div className="influencer_favorite_card-text">
          <p className="influencer-text-p"> Name </p>
          <p> {influencer.name} </p>
        </div>
        <div className="line-favorite-card" />
        <div className="influencer_favorite_card-text">
          <p className="influencer-text-p"> Email </p>
          <p> {influencer.name} </p>
        </div>
        <div className="line-favorite-card" />
        <div className="influencer_favorite_card-text">
          <p className="influencer-text-p"> Count </p>
          <p> {influencer.price} </p>
        </div>

        <div className="influencer_favorite_card-btn">
          <Button width={"100%"} title="Send Massage" />
          <Button width={"100%"} title="Send Massage" />
        </div>
      </div>
    </div>
  );
}
