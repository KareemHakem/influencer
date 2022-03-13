import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getInfluencers } from "../../../redux/influencers/action";

import { Error } from "../../../commons/Error";
import { Loading } from "../../../commons/Loading";
import InfluencerCard from "../../../components/ifluencerComponents/InfluencerCard";
import "./style.css";

export default function InfluencerPage() {
  const { influencer, loading, error } = useSelector(
    (state) => state.influencers
  );

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfluencers());
  }, [dispatch]);

  const handleNavigate = (id) => {
    Navigate(`/influencer/${id}`);
  };

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="influencerPageContainer">
      <div className="influencer-card_container">
        {influencer?.influencers?.map((influencer) => (
          <InfluencerCard
            key={influencer._id}
            handleNavigate={handleNavigate}
            influencer={influencer}
          />
        ))}
      </div>
    </div>
  );
}
