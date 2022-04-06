import React from "react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import { HomeAnimation } from "../../../components/HomeComponents/HomeAnimation";
import HomeText from "../../../components/HomeComponents/HomeText";

import "./style.css";

export default function HomePage() {
  const { currentUser } = useSelector((state) => state.auth);
  const Navigate = useNavigate();

  console.log(currentUser);

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
