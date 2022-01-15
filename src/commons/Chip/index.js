import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "./style.css";
export default function Chips({ text }) {
  return (
    <Stack direction="row" spacing={1}>
      <Chip
        className="Influencer_chip-container"
        label={text}
        variant="outlined"
        clickable
      />
    </Stack>
  );
}
