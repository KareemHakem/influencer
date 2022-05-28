import { type } from "./type";
import { axios } from "../../api/axios";
import { endpoint } from "../../api/requests/endpoint";
import { errorHandlers } from "../../utils/errorHandler";

const authLoginUserReducer = (values) => async (dispatch) => {
  dispatch({ type: type.AUTH_USER_REGISTER_REQUEST });
  try {
    const { data } = await axios.post(
      `${endpoint.users}/${endpoint.login}`,
      values
    );
    dispatch({ type: type.AUTH_USER_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    errorHandlers(error);
    dispatch({ type: type.AUTH_USER_LOGIN_ERROR, payload: error });
  }
};

const authRegisterUserReducer = (values) => async (dispatch) => {
  dispatch({ type: type.AUTH_USER_REGISTER_REQUEST });

  try {
    const { data } = await axios.post(
      `${endpoint.users}/${endpoint.Register}`,
      values
    );
    dispatch({ type: type.AUTH_USER_REGISTER_SUCCESS, payload: data });
  } catch (error) {
    errorHandlers(error);
    dispatch({ type: type.AUTH_USER_REGISTER_ERROR, payload: error });
  }
};

const authUserUpdated = (values) => {
  return { type: type.AUTH_USER_UPDATED, payload: values };
};

const authLogoutUserReducer = () => {
  return { type: type.AUTH_USER_LOGOUT };
};



export {
  authLoginUserReducer,
  authRegisterUserReducer,
  authLogoutUserReducer,
  authUserUpdated,
};




