import React from "react";
import Checkbox from "@mui/material/Checkbox";
import "./style.css";

export default function CheckBox({ label }) {
  return (
    <div className="checkBoxFlex">
      <p> {label} </p>
      <Checkbox defaultChecked />
    </div>
  );
}
