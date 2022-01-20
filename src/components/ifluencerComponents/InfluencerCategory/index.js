import React from "react";
import Chips from "../../../commons/Chip";

export default function InfluencerCategory({ influencer }) {
  return (
    <div>
      <div className="product_Card_ingredient">
        {influencer.category.map((category) => {
          return <div key={category}>{category}</div>;
        })}
      </div>
    </div>
  );
}
