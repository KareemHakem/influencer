import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./style.css";
import { useField } from "formik";

export default function FromSelect({
  value,
  handleChange,
  label,
  holderName,
  width,
  margin,
  options,
  multiple = [false],
  ...props
}) {
  const [field, meta] = useField(props);
  return (
    <Box className="influencer_SelectorInput-container" sx={{ margin, width }}>
      <FormControl error={meta.touched && !!meta.error}>
        <InputLabel id="demo-simple-select-label">{holderName}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
          multiple={multiple}
          {...field}
          {...props}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {meta.touched && meta.error && (
          <p className="error_input_message"> {meta.error} </p>
        )}
      </FormControl>
    </Box>
  );
}
