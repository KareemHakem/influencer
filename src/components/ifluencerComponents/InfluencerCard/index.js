import React from "react";
import { Button } from "../../../commons/Button";
import { IconsChip } from "../../../assets/data/avatarIcons";
import "./style.css";
import { IconButton } from "@mui/material";

export default function InfluencerCard({ influencer, handleNavigate }) {
  return (
    <div className="card_info_influencer">
      <img className="image" alt="Influencer_image" src={influencer.image} />
      <h3 className="influencer_card-name"> {influencer.name} </h3>
      <div className="influencer_card-button-container">
        <Button
          width={150}
          title={"View Profile"}
          onClick={() => handleNavigate(influencer._id)}
        />
      </div>

      <div className="influencer_card-underLine" />

      <div className="influencer_card-Avatar">
        {IconsChip.map((icon) => {
          return (
            <div className="influencer_card-Avatar-container">
              <IconButton className="IconButton" size="large" key={icon.key}>
                {icon.icons}
              </IconButton>
              <p className="name-chip"> {icon.name} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
