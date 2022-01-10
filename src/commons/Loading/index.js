import React from "react";
import ReactLoading from "react-loading";
import {COLORS} from '../../style'
 
export const Loading = ({
  color = COLORS.primary,
  type = "spin",
  width = "20%",
  height = "20%",
}) => {
  return (
                                
    <ReactLoading type={type} color={color} height={height} width={width} />
  );
};
