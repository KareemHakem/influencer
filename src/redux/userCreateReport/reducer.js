import { type } from "./type";

const initialState = {
  success: false,
  loading: false,
  error: null,
};

const userReportInfluencerReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.USER_REPORT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case type.USER_REPORT_SUCCESS:
      return {
        loading: false,
        success: true,
        error: null,
      };

    case type.USER_REPORT_ERROR:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReportInfluencerReducer;
