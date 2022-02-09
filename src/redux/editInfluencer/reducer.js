import { type } from "./type";

const initialState = {
  success: false,
  loading: false,
  error: null,
};

const editProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.EDIT_INFLUENCER_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case type.EDIT_INFLUENCER_SUCCESS:
      return {
        loading: false,
        success: action.payload,
        error: null,
      };
    case type.EDIT_INFLUENCER_ERROR:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default editProfileReducer;
