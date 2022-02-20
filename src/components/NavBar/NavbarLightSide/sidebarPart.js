import React from "react";
import "./style.css";

export default function SidebarPart({ onClick, Icon, title }) {
  return (
    <div className="sidebar_row_main_dev flexCol" onClick={onClick}>
      {Icon && (
        <div className="icon_container flexCol">
          <Icon fontSize="large" style={{ color: "white" }} />
        </div>
      )}
      <div className="sidebar_row_text">{title}</div>
    </div>
  );
}
