import { type } from "./type";

const initialState = {
  success: false,
  loading: false,
  error: null,
};

const editUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.EDIT_USER_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case type.EDIT_USER_SUCCESS:
      return {
        success: true,
        loading: false,
        error: null,
      };
    case type.EDIT_USER_ERROR:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default editUserReducer;
