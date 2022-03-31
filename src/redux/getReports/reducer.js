import { type } from "./type";

const initialState = {
  success: false,
  loading: false,
  error: null,
};

const getReportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_REPORTS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case type.GET_REPORTS_SUCCESS:
      return {
        loading: false,
        success: action.payload,
        error: null,
      };
    case type.GET_REPORTS_ERROR:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default getReportsReducer;
