import { type } from "./type";

const initialState = {
  reports: [],
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
        reports: action.payload,
        error: null,
      };
    case type.GET_REPORTS_ERROR:
      return {
        loading: false,
        error: action.payload,
        ...state,
      };

    default:
      return state;
  }
};

export default getReportsReducer;
