import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./style.css";

export default function FromSelect({
  firstText,
  secondText,
  thirdText,
  FourthText,
  selectYourPackage,
  handleChange,
  label,
  holderName,
  width,
  margin,
}) {
  return (
    <Box className="influencer_SelectorInput-container" sx={{ margin, width }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{holderName}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectYourPackage}
          label={label}
          onChange={handleChange}
        >
          <MenuItem value={10}>{firstText}</MenuItem>
          <MenuItem value={20}>{secondText}</MenuItem>
          <MenuItem value={30}>{thirdText}</MenuItem>
          <MenuItem value={30}>{FourthText}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
