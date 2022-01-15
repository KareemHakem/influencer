import React from "react";
import ReactLoading from "react-loading";
import { COLORS } from "../../style";

export const Loading = ({
  color = COLORS.primary,
  type = "cylon",
  width = "20%",
  height = "20%",
}) => {
  return (
    <div style={{height:"100vh", width:"100%", backgroundColor:"#834765"}} >
      <ReactLoading type={type} color={color} height={height} width={width} />
    </div>
  );
};
