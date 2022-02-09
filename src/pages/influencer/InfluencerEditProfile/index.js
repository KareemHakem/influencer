import React from "react";

import { editInfluencer } from "../../../redux/editInfluencer/action";
import { useSelector, useDispatch } from "react-redux";

import InfluencerEditForm from "../../../components/ifluencerComponents/InfluencerEditForm";

import { errorHandlers } from "../../../utils/errorHandler";

import "./style.css";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

export default function InfluencerEditProfile() {
  const { loading } = useSelector((state) => state.editInfluencer);
  const { influencer } = useSelector((state) => state.influencers);
  console.log(influencer, "kareem mohamed ");

  const dispatch = useDispatch();
  const { id } = useParams();

  const influencerDetail = influencer.influencers.find((i) => i._id === id);

  const handleEditInfluencerProfile = (values) =>
    dispatch(editInfluencer(values, id));

  return (
    <div>
      <InfluencerEditForm
        handleEditInfluencerProfile={handleEditInfluencerProfile}
        loading={loading}
        influencer={influencerDetail}
      />
    </div>
  );
}
