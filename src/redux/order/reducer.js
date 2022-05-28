import { types } from "./types";

const initialState = {
  initialOrder: {},
  orderStartingTime: null,
  success: false,
  loading: false,
  data: null,
  error: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INITIATE_ORDER:
      return {
        ...state,
        initialOrder: action.payload, // values
        orderStartingTime: Date.now()  // time  ---> 10 min check  CREATE_ORDER_SUCCESS? --- : cancelOrder()
      };
    case types.ORDER_SELECTED_PAYMENT:
      return{
        ...state,
        initialOrder: action.payload
      }

    case types.CANCEL_ORDER:
      return {
        ...state,
        initialOrder: {}, 
      };
      case types.CREATE_ORDER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case types.CREATE_ORDER_SUCCESS:
        return {
          loading: false,
          success: true,
          data: action.payload,
          error: null,
        };
      case types.CREATE_ORDER_ERROR:
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
export default orderReducer