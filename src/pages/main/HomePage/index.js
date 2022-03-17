import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { axios } from "../../../api/axios";

import { HomeAnimation } from "../../../components/HomeComponents/HomeAnimation";
import HomeText from "../../../components/HomeComponents/HomeText";

import "./style.css";

export default function HomePage() {
  const { currentUser } = useSelector((state) => state.auth);
  const Navigate = useNavigate();

  useEffect(() => {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${currentUser?.token}`;
  }, [currentUser]);

  //   const array = [1, 2, 3, 4];
  //   const existing = array.find((i) => i === 9);
  //   console.log(existing, "------");

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
