import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./style.css";

export default function FromSelect({
  value,
  handleChange,
  label,
  holderName,
  width,
  margin,
  options,
  ...props
}) {
  return (
    <Box className="influencer_SelectorInput-container" sx={{ margin, width }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{holderName}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
          {...props}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.price}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
