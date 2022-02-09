import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { axios } from "../../../api/axios";
import { HomeAnimation } from "../../../components/HomeComponents/HomeAnimation";
import HomeText from "../../../components/HomeComponents/HomeText";
import "./style.css";

export default function HomePage() {
  const { currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${currentUser?.token}`;
  }, [currentUser]);

  console.log(currentUser, "-------------->");
  return (
    <div className="home-page-Animation">
      <div className="home-page-Animation_container">
        <HomeText />
        <HomeAnimation />
      </div>
    </div>
  );
}
