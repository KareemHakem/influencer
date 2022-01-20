import React from "react";
import InfluencerFavoriteCard from "../../../components/ifluencerComponents/InfluencerFavoriteCard";

export default function FavoritePage({ influencer }) {
  return (
    <div>
      <InfluencerFavoriteCard influencer={influencer} />
    </div>
  );
}
