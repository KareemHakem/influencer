import { types } from "./types";

export const initiateOrder = (values) => {
  return {
    type: types.INITIATE_ORDER,
    payload: values,
  };
};

export const cancelOrder = () => {
  return {
    type: types.CANCEL_ORDER,
  };
};

export const userSelectPayment = (value) => {
  return { type: types.ORDER_SELECTED_PAYMENT, payload: value };
};
