import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Input({
  variant,
  label,
  width,
  margin,
  ...otherProps
}) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { margin, width },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label={label} variant={variant} {...otherProps} />
    </Box>
  );
}
