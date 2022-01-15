import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Input({ width, hight, margin, ...otherProps }) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { hight, margin, width },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" {...otherProps} />
    </Box>
  );
}
