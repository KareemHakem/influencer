import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getInfluencers } from "../../../redux/influencers/action";

import SearchForInfluencer from "../../../components/SearchForInfluencer";
import InfluencerCard from "../../../components/ifluencerComponents/InfluencerCard";
import { Error } from "../../../commons/Error";
import { Loading } from "../../../commons/Loading";
import { Icons } from "../../../assets/Icons";

import "./style.css";

export default function InfluencerPage() {
  const { influencer, loading, error } = useSelector(
    (state) => state.influencers
  );
  const [clickToSearch, setClickToSearch] = useState(true);
  const [search, setSearch] = useState("");

  const { pageNumber } = useParams();
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(getInfluencers(search.trim(), pageNumber));
  }, [dispatch, search, pageNumber]);

  const handleNavigate = (id) => {
    Navigate(`/influencer/${id}`);
  };

  const handleToSearchClick = () => {
    setClickToSearch(false);
  };

  let pagesArray = [...Array(Number(influencer.pages))].map((_, i) => i + 1); // [1, 2,3,4]

  const navigateToPages = (pageNumber) => {
    pageNumber === 0
      ? Navigate(`/influencer`)
      : Navigate(`/influencer-paginate/${pageNumber}`);
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
      <div className="paginatePage">
        <div
          className="paginateNextAndPreviousPage"
          onClick={() => navigateToPages(Number(pageNumber) - 1)}
        >
          {<Icons.ArrowLeftIcon />}
        </div>
        {pagesArray.map((i) => (
          <div
            onClick={() => navigateToPages(i)}
            className="paginateNumberPage"
            key={i}
          >
            {i}
          </div>
        ))}
        <div
          className="paginateNextAndPreviousPage"
          onClick={() => navigateToPages(Number(pageNumber) + 1)}
        >
          {<Icons.ArrowRightIcon />}
        </div>
      </div>
    </div>
  );
}
