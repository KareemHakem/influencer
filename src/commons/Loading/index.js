import React from "react";
import ReactLoading from "react-loading";
import { COLORS } from "../../style";

export const Loading = ({ color = COLORS.primary, type, width, height }) => {
  return (
    <ReactLoading type={type} color={color} height={height} width={width} />
  );
};
