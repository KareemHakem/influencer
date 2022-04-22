import React from "react";
import { useSelector } from "react-redux";
import { Alerts } from "../../../commons/Alert";
import InfluencerFavoriteCard from "../../../components/ifluencerComponents/InfluencerFavoriteCard";
import "./style.css";

export default function FavoritePage() {
  const { favorite } = useSelector((state) => state.favorites);

  console.log(favorite);

  if (favorite.length === 0) {
    return (
      <div className="alertCardFavoritePage" >
        <Alerts alertText="You haven't added influencer to your favorites" />
      </div>
    );
  } else {
    return (
      <>
        <div className="favoritePage_container">
          {favorite.map((influencer) => (
            <InfluencerFavoriteCard
              key={influencer}
              influencer={influencer}
              // removeFavoritesInfluencer={removeFavoritesInfluencer}
            />
          ))}
        </div>
      </>
    );
  }
}
