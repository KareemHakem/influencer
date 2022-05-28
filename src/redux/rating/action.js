import { ADD_RATING } from "./types";

export const addRating = (newValue, id) => {
  return {
    type: ADD_RATING,
    payload: { rate: newValue, userId: id },
  };
};
