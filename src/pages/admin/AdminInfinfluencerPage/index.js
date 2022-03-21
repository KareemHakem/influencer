import React from "react";
import { useSelector } from "react-redux";
import AdminInfluencerComponent from "../../../components/adminComponents/AdminInfluencerComponent";

export default function AdminInfinfluencerPage() {
  const { influencer } = useSelector((state) => state.influencers);
  console.log(influencer);
  const handleDeleteInfluencer = () => {};
  return (
    <div>
      <AdminInfluencerComponent
        influencer={influencer}
        handleDeleteInfluencer={handleDeleteInfluencer}
      />
    </div>
  );
}
