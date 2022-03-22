import React from "react";
import "./style.css";

export default function InputWithIcon({ Icon, ...props }) {
  return (
    <form className="custom_input">
      <input className="custom_input__input" {...props} />
      <button type="submit" style={{ display: "none" }}></button>
      {Icon && <Icon style={{ color: "gray" }} />}
    </form>
  );
}
