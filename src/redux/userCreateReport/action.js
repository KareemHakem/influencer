import { type } from "./type";
import { axios } from "../../api/axios";
import { endpoint } from "../../api/requests/endpoint";
import { errorHandlers } from "../../utils/errorHandler";
import { toast } from "react-toastify";

export const userReportInfluencer = (values) => async (dispatch) => {
  dispatch({ type: type.USER_REPORT_REQUEST });

  try {
    const { data } = await axios.post(
      `${endpoint.reports}/${endpoint.create}`,
      values
    );
    console.log("values, data =>>>>>", values, data);
    dispatch({ type: type.USER_REPORT_SUCCESS, payload: data });
    toast.success("we will seluchen your problem");
  } catch (error) {
    dispatch({ type: type.USER_REPORT_ERROR, payload: error });
    errorHandlers(error);
  }
};
