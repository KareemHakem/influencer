import { type } from "./type";
import { axios } from "../../api/axios";
import { endpoint } from "../../api/requests/endpoint";
import { errorHandlers } from "../../utils/errorHandler";

export const getUsers = () => async (dispatch) => {
  console.log('Here')
  try {
    dispatch({ type: type.GET_USERS_REQUEST });
    console.log("users => request");
    const { data } = await axios.get(endpoint.users);
    dispatch({ type: type.GET_USERS_SUCCESS, payload: data });
    console.log("data => ", data);
  } catch (error) {
    dispatch({ type: type.GET_USERS_ERROR, payload: error });
  
  }
};
