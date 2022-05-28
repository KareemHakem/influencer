import { type } from "./type";
import { axios } from "../../api/axios";
import { endpoint } from "../../api/requests/endpoint";

export const getOrders = () => async (dispatch) => {
  dispatch({ type: type.GET_ORDERS_REQUEST });

  try {
    const { data } = await axios.get(`${endpoint.orders}/`);
    dispatch({ type: type.GET_ORDERS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: type.GET_ORDERS_ERROR, payload: err });
  }
};
