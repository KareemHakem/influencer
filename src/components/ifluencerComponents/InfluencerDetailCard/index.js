import React from "react";
import Lightbox from "react-image-lightbox";
import { useSelector } from "react-redux";

import InfluencerFollowers from "../../ifluencerComponents/InfluencerFollowers";
import InfluencerBio from "../InfluencerBio";
import InfluencerRating from "../InfluencerRating";
import FormSelect from "../../../commons/FormSelect";
import { PackagesOptions } from "../../../assets/data/packagesOptions";
import { Icons } from "../../../assets/Icons";
import { Button } from "../../../commons/Button";

import "react-image-lightbox/style.css";
import "./style.css";

export default function InfluencerDetailCard({
  influencer,
  handleAddFavorite,
  handlePayNavigation,
  select,
  setSelect,
  handleOpenImageFrame,
  openImage,
  handleCloseImage,
  handleAddReport,
}) {
  const { rates } = useSelector((state) => state.rates);
  console.log("openImage", openImage);

  return (
    <div className="influencerCardDetailPage">
      <div className="influencer_card_detail-container">
        <div className="influencer_card_detail_image-container">
          <img
            onClick={handleOpenImageFrame}
            src={influencer.image}
            alt="images"
          />
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
                height={50}
                title={`REQUEST ORDER FOR $ ${select}`}
                onClick={handlePayNavigation}
                disabled={!select}
              />
              <Button
                className="reportButton"
                width={150}
                title="REPORT"
                Icon={<Icons.ReportIcon />}
                onClick={handleAddReport}
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
      {openImage && (
        <Lightbox
          mainSrc={influencer.image}
          onCloseRequest={handleCloseImage}
        />
      )}
    </div>
  );
}
