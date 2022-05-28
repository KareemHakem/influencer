import { type } from "./type";

const initialState = {
  success: false,
  loading: false,
  error: null,
};

const adminEditReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADMIN_EDIT_USER_INFO_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case type.ADMIN_EDIT_USER_INFO_SUCCESS:
      return {
        loading: false,
        success: action.payload,
        error: null,
      };

    case type.ADMIN_EDIT_USER_INFO_ERROR:
      return {
        loading: false,
        error: action.payload,
        success: false,
      };

    default:
      return state;
  }
};

export default adminEditReducer;
