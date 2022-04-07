import { type } from "./type";
import { axios } from "../../api/axios";

export const getInfluencers =
  (keyword = "", pageNumber = "") =>
  async (dispatch) => {
    dispatch({ type: type.GET_INFLUENCERS_REQUEST });
    console.log(keyword, "keyword");
    try {
      const { data } = await axios.get(
        `influencers?keyword=${keyword}&pageNumber=${pageNumber}`
      );
      dispatch({ type: type.GET_INFLUENCERS_SUCCESS, payload: data });
      console.log(data, "data");
    } catch (error) {
      dispatch({ type: type.GET_INFLUENCERS_ERROR, payload: error });
    }
  };
