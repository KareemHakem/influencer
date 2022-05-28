import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
import { addRating } from "../../../redux/rating/action";


export const InfluencerRating = () => {
  const [value, setValue] = useState();
  const { isAuthenticated, currentUser } = useSelector((state) => state.auth);
  const { rates, usersId } = useSelector((state) => state.rates);

  const dispatch = useDispatch();

  const handleReview = (_, newValue) => {
    setValue(newValue);
    dispatch(addRating(newValue, currentUser));
  };

  return (
    <Stack spacing={1}>
      <Rating
        name="half-rating"
        value={rates}
        onChange={handleReview}
        readOnly={!isAuthenticated}
      />
    </Stack>
  );
};

export default InfluencerRating;
