import { type } from "./type";
import { axios } from "../../api/axios";
import { endpoint } from "../../api/requests/endpoint";
import { errorHandlers } from "../../utils/errorHandler";

export const getInfluencers = () => async (dispatch) => {
  dispatch({ type: type.GET_INFLUENCERS_REQUEST });
  console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmm")
  try {
    const { data } = await axios.get(endpoint.influencers);
    dispatch({ type: type.GET_INFLUENCERS_SUCCESS, payload: data });
    console.log(data, "data")
  } catch (error) {
    dispatch({ type: type.GET_INFLUENCERS_ERROR, payload: error });
    errorHandlers(error);
  }
};
