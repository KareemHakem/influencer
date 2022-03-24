import { type } from "./type";
import { axios } from "../..//api/axios";
import { endpoint } from "../../api/requests/endpoint";
import { errorHandlers } from "../../utils/errorHandler";

export const editUser = (values, id) => async (dispatch) => {
  dispatch({ type: type.EDIT_USER_REQUEST });
  try {
    const { data } = await axios.put(`users/profile`, values);
    dispatch({ type: type.EDIT_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: type.EDIT_USER_ERROR, payload: error });
    errorHandlers(error);
    console.log(error);
  }
};
