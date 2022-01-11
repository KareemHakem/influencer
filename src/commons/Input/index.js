import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Input({
  variant,
  label,
  placeholder,
  width,
  hight,
  margin,
}) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { hight, margin, width },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label={label}
        variant={variant}
        placeholder={placeholder}
      />
    </Box>
  );
}
