import React from "react";
import { useNavigate } from "react-router-dom";

import { editInfluencer } from "../../../redux/editInfluencer/action";
import { useSelector, useDispatch } from "react-redux";

import InfluencerEditForm from "../../../components/ifluencerComponents/InfluencerEditForm";

import { useParams } from "react-router-dom";

import "./style.css";

export default function InfluencerEditProfile() {
  const { loading } = useSelector((state) => state.editInfluencer);
  const { influencer } = useSelector((state) => state.influencers);
  console.log(influencer, "kareem mohamed ");

  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { id } = useParams();

  const influencerDetail = influencer.influencers.find((i) => i._id === id);

  const handleEditInfluencerProfile = (values) => {
    dispatch(editInfluencer(values, id));
    navigation(`/influencer/${id}`);
  };

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
