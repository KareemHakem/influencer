import { type } from "./type";

const initialState = {
  success: false,
  loading: false,
  error: null,
};

const creatProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.CREATE_INFLUENCER_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case type.CREATE_INFLUENCER_SUCCESS:
      return {
        loading: false,
        success: action.payload,
        error: null,
      };
    case type.CREATE_INFLUENCER_ERROR:
      return {
        loading: false,
        error: action.payload,
        ...state,
      };
    default:
      return state;
  }
};

export default creatProfileReducer;
