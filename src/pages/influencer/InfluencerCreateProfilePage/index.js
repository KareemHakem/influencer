import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useSelector } from "react-redux";

import InfluencerCreateProfile from "../../../components/ifluencerComponents/InfluencerCreateProfile/index";

export default function InfluencerCreateProfilePage() {
  const { loading } = useSelector((state) => state.createProfile);

  const { id } = useParams();

  const handleCreateProfile = (values) => {};

  return (
    <div>
      <InfluencerCreateProfile
        handleSubmit={handleCreateProfile}
        loading={loading}
      />
    </div>
  );
}
