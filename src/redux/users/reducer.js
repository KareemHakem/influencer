import { type } from "./type";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_USERS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case type.GET_USERS_SUCCESS:
      return {
        users: action.payload,
        loading: false,
        error: null,
      };
    case type.GET_USERS_ERROR:
      return {
        users: [],
        loading: false,
        error: action.payload,
      };

    default: return state;
  }
};

export default userReducer;
