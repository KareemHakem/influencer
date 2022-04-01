import { type } from "./type";

const initialState = {
  success: false,
  loading: false,
  data: null,
  error: null,
};

const createOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.CREATE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case type.CREATE_ORDER_SUCCESS:
      return {
        loading: false,
        success: true,
        data: action.payload,
        error: null,
      };
    case type.CREATE_ORDER_ERROR:
      return {
        ...state,
        success: false,
        data: null,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default createOrderReducer;
