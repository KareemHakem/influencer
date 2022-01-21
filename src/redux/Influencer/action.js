import { type } from "./type";

export const addInfluencerFavorites = (influencer) => {
  return {
    type: type.ADD_FAVORITE_INFLUENCER,
    payload: influencer,
  };
};

export const removeFavoritesInfluencer = (influencer) => {
  return {
    type: type.REMOVE_FAVORITE_INFLUENCER,
    payload: influencer,
  };
};
