import React from "react";
import { useSelector } from "react-redux";
import { Alerts } from "../../../commons/Alert";
import { removeFavoritesInfluencer } from "../../../redux/Influencer/action";
import InfluencerFavoriteCard from "../../../components/ifluencerComponents/InfluencerFavoriteCard";
import "./style.css";

export default function FavoritePage() {
  const { favorite } = useSelector((state) => state.favorites);

  console.log(favorite);

  if (favorite.length === 0) {
    return (
      <Alerts alertText="You haven't added influencer to your favorites" />
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
