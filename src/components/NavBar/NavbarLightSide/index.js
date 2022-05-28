import React from "react";
import "./style.css";

export default function Sidebar({ children }) {
  return (
    <div className="sidebar_main">
      <div className="sidebar_row_main_dev flexCol">
        <br />
      </div>
      <>{children}</>
    </div>
  );
}
