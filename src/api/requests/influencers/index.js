import { axios } from "../../axios";
import { endpoint } from "../endpoint";

export const getInfluencer = async (id) => {
  const { data } = await axios.get(
    `${endpoint.influencers}${endpoint.profile}${id}`
  );

  return data;
};
