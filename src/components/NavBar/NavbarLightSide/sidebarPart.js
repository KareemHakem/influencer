import React from "react";
import "./style.css";

export default function SidebarPart({ onClick, Icon, title, height }) {
  return (
    <div
      className="sidebar_row_main_dev flexCol"
      style={height}
      onClick={onClick}
    >
      {Icon && (
        <div className="flexCol">
          <div className="icon_container">
            <Icon fontSize="large" style={{ color: "white" }} />
          </div>
        </div>
      )}
      <div className="sidebar_row_text">{title}</div>
    </div>
  );
}
