import { type } from "./type";
import { axios } from "../../api/axios";
import { endpoint } from "../../api/requests/endpoint";
import { errorHandlers } from "../../utils/errorHandler";

export const createProfileInfluencer = (values) => async (dispatch) => {
  dispatch({ type: type.CREATE_INFLUENCER_REQUEST });
  try {
    const { data } = await axios.post(
      `${endpoint.influencers}${endpoint.profile}${endpoint.create}`,
      values
    );
    dispatch({ type: type.CREATE_INFLUENCER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: type.CREATE_INFLUENCER_ERROR, payload: error });
    errorHandlers(error);
  }
};
