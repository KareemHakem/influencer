import { type } from "./type";
import { axios } from "../../api/axios";
import { endpoint } from "../../api/requests/endpoint";
import { errorHandlers } from "../../utils/errorHandler";

export const createProfileInfluencer = (values) => async (dispatch) => {
  dispatch({ type: type.CREATE_INFLUENCER_REQUEST });
  console.log(values, "3206423780482937402938740923874");
  try {
    const { data } = await axios.post(
      `${endpoint.influencers}${endpoint.profile}${endpoint.create}`,
      values
    );
    console.log(data, "hwepoifuwhyefpiohweofipuhwepiofjhwpef");
    dispatch({ type: type.CREATE_INFLUENCER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: type.CREATE_INFLUENCER_ERROR, payload: error });
    errorHandlers(error);
    console.log(
      error,
      "983024r739048r73f094hcf39nb47r90chjvn309784ncvb7m0938vnb"
    );
  }
};
