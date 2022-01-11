import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import "./style.css";

export default function Avatars({ image, name, height, width}) {
  return (
    <Stack direction="row" spacing={1}>
      <Avatar sx={{ width, height }} alt="image" src={image} />
    </Stack>
  );
}
