import { type } from "./type";
import { axios } from "../../api/axios";
import { endpoint } from "../../api/requests/endpoint";

export const getReports = () => async (dispatch) => {
  dispatch({ type: type.GET_REPORTS_REQUEST });
  try {
    const { data } = await axios.get(`${endpoint.reports}`);
    dispatch({ type: type.GET_REPORTS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: type.GET_REPORTS_ERROR, payload: err });
  }
};
