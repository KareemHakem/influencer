import { type } from "./type";

const initialState = {
  success: false,
  loading: false,
  error: null,
};

const deleteUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.DELETE_USERS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case type.DELETE_USERS_SUCCESS:
      return {
        success: action.payload,
        loading: false,
        error: null,
      };
    case type.DELETE_USERS_ERROR:
      return {
        error: action.payload,
        ...state,
      };

    default:
      return state;
  }
};

export default deleteUsersReducer;
