import { type } from "./type";
import { axios } from "../../api/axios";
import { endpoint } from "../../api/requests/endpoint";
import { errorHandlers } from "../../utils/errorHandler";

export const adminEditUser = (values, id) => async (dispatch) => {
  dispatch({ type: type.ADMIN_EDIT_USER_INFO_REQUEST });
  try {
    const { data } = await axios.put(`${endpoint.users}/${id}`, values);
    dispatch({ type: type.ADMIN_EDIT_USER_INFO_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: type.ADMIN_EDIT_USER_INFO_ERROR, payload: error });
    errorHandlers(error);
  }
};
