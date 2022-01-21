import React from "react";
import Chips from "../../../commons/Chip";

export default function InfluencerCategory({ influencer }) {
  console.log(influencer.category, "kareemmmmmmmmmmm");

  return (
    <div>
      <div className="product_Card_ingredient">
        {influencer.category?.map((category) => (
          <Chips key={category} label={category} />
        ))}
      </div>
    </div>
  );
}
