import { type } from "./type";
import { axios } from "../../api/axios";
// import axios from "axios";
import { endpoint } from "../../api/requests/endpoint";
import { errorHandlers } from "../../utils/errorHandler";

export const editInfluencer = (values, id) => async (dispatch) => {
  dispatch({ type: type.EDIT_INFLUENCER_REQUEST });
  try {
    const { data } = await axios.put(`influencers/profile/${id}`, values);
    dispatch({ type: type.EDIT_INFLUENCER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: type.EDIT_INFLUENCER_ERROR, payload: error });
    errorHandlers(error);
    console.log(error);
  }
};

// export const editInfluencer = (values, id) => async (dispatch, getState) => {
//   try {
//     dispatch({ type: type.EDIT_INFLUENCER_REQUEST });
//     const {
//       auth: { currentUser },
//     } = getState();

//     const config = {
//       headers: {
//         Authorization: `Bearer ${currentUser.token}`,
//         "Content-Type": "application/json",
//       },
//     };
//     const { data } = await axios.put(
//       `http://localhost:5000/api/influencers/profile/${id}`,
//       values,
//       config
//     );
//     console.log(data);
//     dispatch({ type: type.EDIT_INFLUENCER_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({
//       type: type.EDIT_INFLUENCER_ERROR,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
