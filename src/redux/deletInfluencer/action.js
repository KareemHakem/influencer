import { type } from "./type";
import { axios } from "../../api/axios";
import { errorHandlers } from "../../utils/errorHandler";

export const deleteInfluencer = (id) => async (dispatch) => {
  dispatch({ type: type.DELETE_INFLUENCER_REQUEST });

  try {
    const { data } = await axios.delete(`influencers/profile/${id}`);
    dispatch({ type: type.DELETE_INFLUENCER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: type.DELETE_INFLUENCER_ERROR, payload: error });
    errorHandlers(error);
  }
};


// export const deleteUser = (id) => async (dispatch) => {
//   dispatch({ type: type.DELETE_INFLUENCER_REQUEST });

//   try {
//     const { data } = await axios.delete(`users/${id}`);
//     dispatch({ type: type.DELETE_INFLUENCER_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: type.DELETE_INFLUENCER_ERROR, payload: error });
//     errorHandlers(error);
//   }
// };
