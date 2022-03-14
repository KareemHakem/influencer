import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import "./style.css";

export function Alerts({ alertText }) {
  return (
    <Stack className="alertStyle" spacing={2}>
      <Alert className="alertStyleText" severity="info">{alertText}</Alert>
    </Stack>
  );
}
