import React from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

export default function IconButtons({ Icon }) {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton size="large"></IconButton>
    </Stack>
  );
}
