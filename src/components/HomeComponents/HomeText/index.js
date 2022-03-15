import { IcecreamOutlined } from "@mui/icons-material";
import React from "react";
import Typical from "react-typical";
import { Icons } from "../../../assets/Icons";
import { Button } from "../../../commons/Button";
import "./style.css";

export default function HomeText({handleUserInfluencerNavigate}) {
  return (
    <div className="text-container">
      <div className="ml12">
        <Typical
          steps={[
            "Success is nothing more than a",
            1000,
            "Success is nothing more  than a few simple decisions practiced every day!",
            800,
          ]}
          loop={Infinity}
          wrapper="h1"
        />
        <div className="ml12p">
          <p> Connect Business with influencers easily </p>
        </div>
      </div>
      <div className="home_text-btn">
        <Button
          title="VIEW INFLUENCER"
          width="230px"
          onClick={handleUserInfluencerNavigate}
          height={60}
          Icon={<Icons.ArrowForwardIcon/>}
        />
      </div>
    </div>
  );
}
