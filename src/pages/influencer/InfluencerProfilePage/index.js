import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getInfluencers } from "../../../api/requests/influencers";
import InfluencerProfile from "../../../components/ifluencerComponents/InfluencerProfile";
import Loading from "react-loading";
import { Error } from "../../../commons/Error";

const InfluencerProfilePage = () => {
  const [influencer, setInfluencer] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    setLoading(true);
    getInfluencers()
      .then((res) => {
        setInfluencer(res.influencer);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const influencerProfile = influencer?.find((i) => i.user === currentUser._id);

  return (
    <div>
      {!influencerProfile ? (
        <div> Create Profile </div>
      ) : (
        <InfluencerProfile influencerProfile={influencerProfile} />
      )}
    </div>
  );
};

export default InfluencerProfilePage;
