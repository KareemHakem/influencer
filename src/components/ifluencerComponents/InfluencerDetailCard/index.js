import React from "react";
import InfluencerFollowers from "../../ifluencerComponents/InfluencerFollowers";
import InfluencerBio from "../InfluencerBio";
import InfluencerRating from "../InfluencerRating";
import FormSelect from "../../../commons/FormSelect";
import { Icons } from "../../../assets/Icons";
import { Button } from "../../../commons/Button";
import "./style.css";

export default function InfluencerDetailCard({
  influencer,
  handleAddFavorite,
}) {
  return (
    <div className="influencer_card_detail-container">
      <div className="influencer_card_detail_image-container">
        <img src={influencer.image} alt="images" />
      </div>
      <div className="influencer_card_detail">
        <h2 className="influencer_card_detail-name"> {influencer.name} </h2>
        <p className="influencer_card_detail-text"> Influencer </p>
        <InfluencerFollowers influencer={influencer} />

        <div className="influencer_card_detail-rating">
          <InfluencerRating number={4} />
          <p> (4 reviews) </p>
        </div>

        <div>
          <InfluencerBio influencer={influencer} />
        </div>

        <div className="influencer_card_detail-btn-container">
          <FormSelect
            holderName="Select Your Package"
            width={270}
            firstText="Post"
            secondText="3 Stories"
            thirdText="Post - 3  Stories"
            FourthText="Package"
          />
          <div className="influencer_card_detail-btn">
            <Button
              className="influencer_request-btn"
              title="REQUEST ORDER FOR $"
            />
            <Button
              className="influencer_Add-btn"
              title="ADD TO"
              Icon={<Icons.FavoriteBorderIcon style={{ color: "red" }} />}
              onClick={handleAddFavorite}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
