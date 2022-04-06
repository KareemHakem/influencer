import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getInfluencers } from "../../../redux/influencers/action";

import InfluencerProfile from "../../../components/ifluencerComponents/InfluencerProfile";
import { Loading } from "../../../commons/Loading";
import { Error } from "../../../commons/Error";
import { Button } from "@mui/material";

import "./style.css";

const InfluencerProfilePage = () => {
  const { influencer, error, loading } = useSelector(
    (state) => state.influencers
  );
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getInfluencers());
    console.log("use Ef");
  }, [dispatch]);

  const influencerDetail = influencer?.influencers?.find(
    (id) => id.user === currentUser._id
  );

  const handleNavigate = () => {
    navigate(`/editprofile/${influencerDetail?._id}`);
  };

  const handleProfileNavigate = () => {
    navigate(`/influencer/${influencerDetail._id}`);
  };

  const handleOrdersNavigate = () => {
    navigate(`/influencer-orders`);
  };

  const handleCreatProfileNavigation = () => {
    navigate("/create-profile");
  };

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div>
      {influencerDetail ? (
        <InfluencerProfile
          handleNavigate={handleNavigate}
          influencerDetail={influencerDetail}
          handleProfileNavigate={handleProfileNavigate}
          handleOrdersNavigate={handleOrdersNavigate}
        />
      ) : (
        <div>
          <Button
            className="influencerCreateProfile"
            onClick={handleCreatProfileNavigation}
          >
            Create Profile
          </Button>
        </div>
      )}
    </div>
  );
};

export default InfluencerProfilePage;
