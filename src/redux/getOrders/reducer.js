import { type } from "./type";

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

const getOrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_ORDERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case type.GET_ORDERS_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
        error: null,
      };

    case type.GET_ORDERS_error:
      return {
        loading: false,
        orders: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default getOrdersReducer;
