import { type } from "./type";

const initialState = {
  influencer: [],
  loading: false,
  error: null,
};

const influencersReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_INFLUENCERS_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case type.GET_INFLUENCERS_SUCCESS:
      return {
        influencer: action.payload,
        loading: false,
        error: null,
      };
    case type.GET_INFLUENCERS_ERROR:
      return {
        influencer: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default influencersReducer;
