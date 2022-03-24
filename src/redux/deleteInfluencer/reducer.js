import { type } from "./type";

const initialState = {
  success: false,
  loading: false,
  error: null,
};

const deleteInfluencerReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.DELETE_INFLUENCER_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case type.DELETE_INFLUENCER_SUCCESS:
      return {
        success: action.payload,
        loading: false,
        error: null,
      };
    case type.DELETE_INFLUENCER_ERROR:
      return {
        error: action.payload,
        ...state,
      };

    default:
      return state;
  }
};

export default deleteInfluencerReducer;
