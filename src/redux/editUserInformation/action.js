import { type } from "./type";
import { axios } from "../..//api/axios";
import { endpoint } from "../../api/requests/endpoint";
import { errorHandlers } from "../../utils/errorHandler";
import { authUserUpdated } from "../auth/action";
import { toast } from "react-toastify";

export const editUser = (values, id) => async (dispatch) => {
  dispatch({ type: type.EDIT_USER_REQUEST });
  try {
    const { data } = await axios.put(`${endpoint.users}/${endpoint.profile}`, values);
    dispatch({ type: type.EDIT_USER_SUCCESS, payload: data });

    toast.success("Success To Update Your Information");

    dispatch(authUserUpdated({...data, isInfluencer: false}))
    
  } catch (error) {
    dispatch({ type: type.EDIT_USER_ERROR, payload: error });
    errorHandlers(error);
    console.log(error);
  }
};
