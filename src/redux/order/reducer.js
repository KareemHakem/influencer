import { types } from "./types";

const initialState = {
  initialOrder: {},
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INITIATE_ORDER:
      return {
        initialOrder: action.payload, // values
      };
    case types.ORDER_SELECTED_PAYMENT:
      return{
        initialOrder: action.payload
      }

    case types.CANCEL_ORDER:
      return {
        initialOrder: {}, 
      };

    default:
      return state;
  }
};
export default orderReducer