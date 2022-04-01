import { type } from "./type";
import { axios } from "../../api/axios";
import { endpoint } from "../../api/requests/endpoint";
import { errorHandlers } from "../../utils/errorHandler";

export const UserCreteOrder = (value) => async (dispatch) => {
  dispatch({ type: type.CREATE_ORDER_REQUEST });
  try {
    const { data } = axios.post(`${endpoint.orders}/${endpoint.create}`, value);
    dispatch({ type: type.CREATE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: type.CREATE_ORDER_ERROR, payload: error });
    errorHandlers(error);
  }
};
