import React from "react";
import { useNavigate } from "react-router-dom";

import { HomeAnimation } from "../../../components/HomeComponents/HomeAnimation";
import HomeText from "../../../components/HomeComponents/HomeText";

import "./style.css";

export default function HomePage() {
  const Navigate = useNavigate();

  const handleUserInfluencerNavigate = () => {
    Navigate("/influencer");
  };

  return (
    <div className="home-page-Animation">
      <div className="home-page-Animation_container">
        <HomeText handleUserInfluencerNavigate={handleUserInfluencerNavigate} />
        <HomeAnimation />
      </div>
    </div>
  );
}
