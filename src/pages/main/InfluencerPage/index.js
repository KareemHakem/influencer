import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getInfluencers } from "../../../redux/influencers/action";

import SearchForInfluencer from "../../../components/SearchForInfluencer";
import { Error } from "../../../commons/Error";
import { Loading } from "../../../commons/Loading";
import InfluencerCard from "../../../components/ifluencerComponents/InfluencerCard";

import "./style.css";

export default function InfluencerPage() {
  const { influencer, loading, error } = useSelector(
    (state) => state.influencers
  );
  const [clickToSearch, setClickToSearch] = useState(true);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };


  const Navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfluencers(search.trim()));
  }, [dispatch, search]);

  const handleNavigate = (id) => {
    Navigate(`/influencer/${id}`);
  };

  const handleToSearchClick = () => {
    setClickToSearch(false);
  };

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="influencerPage">
      <div className="influencerPageContainer">
        <SearchForInfluencer
          value={search}
          handleChange={handleChange}
          clickToSearch={clickToSearch}
          handleToSearchClick={handleToSearchClick}
        />
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
    </div>
  );
}
