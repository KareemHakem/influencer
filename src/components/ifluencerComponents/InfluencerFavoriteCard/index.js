import React from "react";
import { Icons } from "../../../assets/Icons";
import { useDispatch } from "react-redux";
import {removeFavoritesInfluencer} from "../../../redux/Influencer/action"
import { Button } from "../../../commons/Button";
import "./style.css";

export default function InfluencerFavoriteCard({
  influencer,
  
}) {
  const dispatch = useDispatch();
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
          <Button
            className="MassageButton"
            width={"100%"}
            title="Send Massage"
            Icon={<Icons.ChatIcon />}
          />
          <Button
            className="deleteButton"
            Icon={<Icons.DeleteIcon />}
            width={"100%"}
            onClick={() => dispatch(removeFavoritesInfluencer(influencer))}
            title="Remove"
          />
        </div>
      </div>
    </div>
  );
}
