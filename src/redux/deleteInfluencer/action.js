import { type } from "./type";
import { axios } from "../../api/axios";
import { errorHandlers } from "../../utils/errorHandler";
import { endpoint } from "../../api/requests/endpoint";


export const deleteInfluencer = (id) => async (dispatch) => {
  dispatch({ type: type.DELETE_INFLUENCER_REQUEST });

  try {
    const { data } = await axios.delete(`${endpoint.influencers}${endpoint.profile}${id}`);
    console.log("influencer data => ", data);
    dispatch({ type: type.DELETE_INFLUENCER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: type.DELETE_INFLUENCER_ERROR, payload: error });
    errorHandlers(error);
  }
};


