import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function InfluencerRating({number}) {
  return (
    <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={number} precision={0.5} />
    </Stack>
  );
}
