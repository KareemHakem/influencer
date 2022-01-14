import React from "react";
import Avatar from "@mui/material/Avatar";
import "./style.css";

export default function Avatars({ image }) {
  return (
    <div className="Avatar_common-style-container">
      <Avatar className="Avatar_common-style " alt="image" src={image} />
    </div>
  );
}
