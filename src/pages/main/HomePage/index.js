import React from "react";
import { HomeAnimation } from "../../../components/HomeComponents/HomeAnimation";
import HomeText from "../../../components/HomeComponents/HomeText";
import "./style.css";

export default function HomePage() {
  return (
    <div className="home-page-Animation">
      <div  className="home-page-Animation_container" >
        <HomeText />
        <HomeAnimation />
      </div>
    </div>
  );
}
