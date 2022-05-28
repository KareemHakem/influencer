import React from "react";
import InfluencerPersonalData from "../InfluencerPersonalData";
import "./style.css";

export default function InfluencerProfileRightSide(influencerDetail) {
  console.log(influencerDetail);

  return (
    <div className="influencer_profile_detail_right_side-container">
      <div className="influencer_profile_detail-category">
        <h3 className="influencer_profile_detail-had">Influencer & Youtuber</h3>

        <div className="product_Card_categorys-container">
          <h3>category</h3>
          <div className="product_Card_categorys">
            {influencerDetail.influencerDetail.category?.map((category) => (
              <div>
                <p className="product_Card_category" key={category}>
                  {category}
                </p>
              </div>
            ))}
          </div>
        </div>
        <InfluencerPersonalData influencerDetail={influencerDetail} />
      </div>
    </div>
  );
}
