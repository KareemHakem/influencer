import React from "react";
import { Button } from "../../../commons/Button";
import "./style.css";


export default function InfluencerFavoriteCard({ name, email, cont, image }) {
  return (
    <div className="influencer_favorite_card-container">
      <div className="influencer_favorite_card-text">
        <p> Name </p>
        <p> {name} </p>
      </div>
      <div className="line-favorite-card" />
      <div className="influencer_favorite_card-text">
        <p> Email </p>
        <p> {email} </p>
      </div>
      <div className="line-favorite-card" />
      <div className="influencer_favorite_card-text">
        <p> Cont </p>
        <p> {cont} </p>

        <div className="influencer_favorite_card-btn">
          <Button />
          <Button />
        </div>
        <div>
          <img src={image} alt="imageInfluencer" />
        </div>
      </div>
    </div>
  );
}
