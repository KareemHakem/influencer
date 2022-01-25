import React from "react";
import Chips from "../../../commons/Chip";
import "./style.css";

export default function InfluencerCategory({ influencer }) {
  return (
    <div>
      <div className="product_Card_ingredients">
        {influencer.category?.map((category) => (
          <div className="product_Card_ingredient">
            <Chips key={category} label={category} />
          </div>
        ))}
      </div>
    </div>
  );
}
