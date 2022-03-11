import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { createProfileInfluencer } from "../../../redux/createProfileInfluencer/action";

import { errorHandlers } from "../../../utils/errorHandler";
import { toast } from "react-toastify";
import InfluencerCreateProfile from "../../../components/ifluencerComponents/InfluencerCreateProfile/index";
import { useNavigate } from "react-router-dom";

export default function InfluencerCreateProfilePage() {
  const { loading } = useSelector((state) => state.createProfile);
  const Navigate = useNavigate();

  const handleCreateProfile = (values) => {
    Navigate("/influencer");
    console.log(values);
  };

  return (
    <div>
      <InfluencerCreateProfile
        handleSubmit={handleCreateProfile}
        loading={loading}
      />
    </div>
  );
}
