import React from "react";
import { useSelector, useDispatsh } from "react-redux";
import { removeFavoritesInfluencer } from "../../../redux/Influencer/action";
import InfluencerFavoriteCard from "../../../components/ifluencerComponents/InfluencerFavoriteCard";
import "./style.css";

export default function FavoritePage() {
  const { favorite } = useSelector((state) => state.favorites);
  console.log(favorite);
  console.log("kjoijoweifj");

  return (
    <div className="favoritePage_container">
      <InfluencerFavoriteCard />
    </div>
  );
}
