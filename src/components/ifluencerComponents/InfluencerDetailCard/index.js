import React from "react";
import InfluencerFollowers from "../../ifluencerComponents/InfluencerFollowers";
import InfluencerBio from "../InfluencerBio";
import InfluencerRating from "../InfluencerRating";
import FormSelect from "../../../commons/FormSelect";
import { Icons } from "../../../assets/Icons";
import { Button } from "../../../commons/Button";
import { PackagesOptions } from "../../../assets/data/packagesOptions";
import { useSelector } from "react-redux";
import "./style.css";

export default function InfluencerDetailCard({
  influencer,
  handleAddFavorite,
  handlePayNavigation,
  select,
  setSelect,
}) {
  const { rates } = useSelector((state) => state.rates);

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
          <p> ({rates} reviews) </p>
        </div>

        <InfluencerBio influencer={influencer} />

        <div className="influencer_card_detail-btn-container">
          <FormSelect
            options={PackagesOptions}
            label="Select Your Package"
            value={select}
            holderName="Select Your Package"
            width={250}
            onChange={(e) => setSelect(e.target.value)}
          />
          <div className="influencer_card_detail-btn">
            <Button
              width={200}
              // className="influencer_request-btn"
              title={`REQUEST ORDER FOR $ ${select}`}
              onClick={handlePayNavigation}
              disabled={!select}
            />
            <Button
              className="influencer_Add-btn"
              title="ADD TO"
              Icon={<Icons.FavoriteBorderIcon />}
              onClick={handleAddFavorite}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
