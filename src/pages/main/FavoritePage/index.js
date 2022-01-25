import React from "react";
import { useSelector } from "react-redux";
import { removeFavoritesInfluencer } from "../../../redux/Influencer/action";
import InfluencerFavoriteCard from "../../../components/ifluencerComponents/InfluencerFavoriteCard";
import "./style.css";

export default function FavoritePage() {
  const { favorite } = useSelector((state) => state.favorites);
  console.log(favorite);
  return (
    <div className="favoritePage_container">
      {favorite.map((influencer) => (
        <InfluencerFavoriteCard key={influencer} influencer={influencer} />
      ))}
    </div>
  );
}
