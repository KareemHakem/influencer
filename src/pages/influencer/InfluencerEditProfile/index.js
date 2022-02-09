import React from "react";

import { editInfluencer } from "../../../redux/editInfluencer/action";
import { useSelector, useDispatch } from "react-redux";

import InfluencerEditForm from "../../../components/ifluencerComponents/InfluencerEditForm";

import { errorHandlers } from "../../../utils/errorHandler";

import "./style.css";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

export default function InfluencerEditProfile() {
  const { loading, error } = useSelector((state) => state.editInfluencer);
  const { influencer } = useSelector((state) => state.influencers);
  console.log(influencer, "kareem mohamed ");

  const dispatch = useDispatch();
  const { id } = useParams();

  const influencerDetail = influencer.influencers.find((i) => i._id === id);

  console.log(influencer.influencers, "jshsd jareem mohamed ahmed ");
  console.log(
    influencerDetail._id,
    "karenm896573897465789364589736459837645893746"
  );

  const handleEditInfluencerProfile = (values) => {
    const {
      name,
      phoneNumber,
      city,
      category,
      bio,
      price,
      fbAccount,
      fbFriends,
      instAccount,
      instFollowers,
      image,
    } = values;
    const body = {
      name,
      phoneNumber,
      city,
      category,
      bio,
      price,
      fbAccount,
      fbFriends,
      instAccount,
      instFollowers,
      image,
    };
    dispatch(editInfluencer(body, id));
    errorHandlers(error);

    console.log(
      values,
      "kikikikikikikikikiki896573897465789364589736459837645893746"
    );
  };

  return (
    <div>
      <InfluencerEditForm
        handleEditInfluencerProfile={handleEditInfluencerProfile}
        loading={loading}
      />
    </div>
  );
}
