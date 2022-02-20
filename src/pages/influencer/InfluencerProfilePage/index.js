import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getInfluencers } from "../../../redux/influencers/action";

import InfluencerProfile from "../../../components/ifluencerComponents/InfluencerProfile";
import { Loading } from "../../../commons/Loading";
import { Error } from "../../../commons/Error";

const InfluencerProfilePage = () => {
  const { influencer, error, loading } = useSelector(
    (state) => state.influencers
  );
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getInfluencers());
    console.log("use Ef");
  }, [dispatch]);

  const influencerDetail = influencer?.influencers?.find(
    (id) => id.user === currentUser._id
  );

  const handleNavigate = () => {
    Navigate(`/editprofile/${influencerDetail?._id}`);
  };

  const handleProfileNavigate = () => {
    Navigate(`/influencer/${id}`);
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
        />
      ) : (
        <div> </div>
      )}
    </div>
  );
};

export default InfluencerProfilePage;
