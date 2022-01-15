import { axios } from "../../axios";
import { endpoint } from "../endpoint";

export const getInfluencers = async () => {
  const { data } = await axios.get(endpoint.influencers);
  return data;
};

