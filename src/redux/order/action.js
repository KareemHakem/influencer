import { types } from "./types";

import { axios } from "../../api/axios";
import { endpoint } from "../../api/requests/endpoint";
import { errorHandlers } from "../../utils/errorHandler";

export const userCreteOrder = (value) => async (dispatch) => {
  dispatch({ type: types.CREATE_ORDER_REQUEST });
  try {
    const { data } = axios.post(`${endpoint.orders}/${endpoint.create}`, value);
    dispatch({ type: types.CREATE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.CREATE_ORDER_ERROR, payload: error });
    errorHandlers(error);
  }
};


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

