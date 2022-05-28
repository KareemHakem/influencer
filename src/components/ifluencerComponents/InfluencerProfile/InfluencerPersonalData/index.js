import React from "react";
import "./style.css";

export default function InfluencerPersonalData({ influencerDetail }) {
  return (
    <>
      <div className="influencer_profile_detail-personal-data-container">
        <h3 className="h3"> personal data </h3>
        <div className="influencer_profile_detail-personal-data">
          <p>phone</p>
          <p className="influencer_profile_detail-personal-category">
            {influencerDetail.influencerDetail.phoneNumber}
          </p>
        </div>
        <div className="influencer_profile_detail-personal-data">
          <p>Price</p>
          <p className="influencer_profile_detail-personal-category">
            {influencerDetail.influencerDetail.price}
          </p>
        </div>
        <div className="influencer_profile_detail-personal-data">
          <p>city</p>
          <p className="influencer_profile_detail-personal-category">
            {influencerDetail.influencerDetail.city}
          </p>
        </div>
        <div className="influencer_profile_detail-personal-data">
          <p>Instagram username</p>
          <p className="influencer_profile_detail-personal-category">
            {influencerDetail.influencerDetail.instAccount}
          </p>
        </div>
        <div className="influencer_profile_detail-personal-data">
          <p>Followers</p>
          <p className="influencer_profile_detail-personal-category">
            {influencerDetail.influencerDetail.instFollowers}
          </p>
        </div>
        <div className="influencer_profile_detail-personal-data">
          <p>Facebook username</p>
          <p className="influencer_profile_detail-personal-category">
            {influencerDetail.influencerDetail.fbAccount}
          </p>
        </div>
        <div className="influencer_profile_detail-personal-data">
          <p>Friends</p>
          <p className="influencer_profile_detail-personal-category">
            {influencerDetail.influencerDetail.fbFriends}
          </p>
        </div>
      </div>
    </>
  );
}
