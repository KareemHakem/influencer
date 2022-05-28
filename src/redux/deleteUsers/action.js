import { type } from "./type";
import { axios } from "../../api/axios";
import { errorHandlers } from "../../utils/errorHandler";
import { endpoint } from "../../api/requests/endpoint";

export const deleteUser = (id) => async (dispatch) => {
  dispatch({ type: type.DELETE_USERS_REQUEST });

  try {
    const { data } = await axios.delete(`${endpoint.users}/${id}`);
    dispatch({ type: type.DELETE_USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: type.DELETE_USERS_ERROR, payload: error });
    errorHandlers(error);
  }
};
