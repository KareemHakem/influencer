import { type } from "./type";

const initialState = {
  favorite: [],
};

const addFavoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_FAVORITE_INFLUENCER:
      return {
        favorite: [...state.favorite, action.payload],
      };

    case type.REMOVE_FAVORITE_INFLUENCER:
      return {
        favorite: state.favorite.filter(
          (favorite) => favorite._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
};

export default addFavoriteReducer;


// TO ADD:  favorite: [...state.favorite, action.payload],

// to FIND   find

// TO DELETE Filter