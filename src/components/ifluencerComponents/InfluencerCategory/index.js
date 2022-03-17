import React from "react";
import Chips from "../../../commons/Chip";
import "./style.css";

export default function InfluencerCategory({ influencer }) {
  return (
    <div>
      <div className="product_Card_ingredients">
        {influencer.category?.map((category) => (
          <div key={category} className="product_Card_ingredient">
            <Chips label={category} />
          </div>
        ))}
      </div>
    </div>
  );
}
