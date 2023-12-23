import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getInfluencers } from "../../../redux/influencers/action";

import InfluencerProfile from "../../../components/ifluencerComponents/InfluencerProfile";
import Loading from "react-loading";
import { Error } from "../../../commons/Error";

const InfluencerProfilePage = () => {
  const { influencer, error, loading } = useSelector(
    (state) => state.influencers
  );
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  console.log(influencer);

  useEffect(() => {
    dispatch(getInfluencers());
  }, [dispatch]);

  const influencerDetail = influencer.influencers.find(
    (id) => id.user === currentUser._id
  );



  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div>
      <InfluencerProfile influencerDetail={influencerDetail} />
    </div>
  );
};

export default InfluencerProfilePage;
