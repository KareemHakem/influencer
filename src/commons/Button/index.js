import React from "react";
import { Loading } from "../Loading";
import "./style.css";

export const Button = ({
  title,
  primary = true,
  secondary,
  Icon,
  disabled,
  loading,
  width,
  margin,
}) => {
  return (
    <button
      disabled={disabled || loading}
      className={
        disabled || loading
          ? "disabled-button basic-button "
          : primary
          ? "basic-button custom-button-primary "
          : secondary && "basic-button custom-button-secondary"
      }
      style={{ width, margin }}
    >
      {loading ? <Loading type="spin" width="20px" height="20px" color='#eaeaea' /> : title}

      {Icon && <div className="button-right-icon"> {Icon}</div>}
    </button>
  );
};
