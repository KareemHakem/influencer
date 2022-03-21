import React from "react";
import "./style.css";

export default function InputWithIcon({ keyword, placeholder, Icon }) {
  return (
    <form className="custom_input">
      <input
        value={keyword}
        className="custom_input__input"
        placeholder={placeholder}
      />
      <button type="submit" style={{ display: "none" }}></button>
      {Icon && <Icon style={{ color: "gray" }} />}
    </form>
  );
}


