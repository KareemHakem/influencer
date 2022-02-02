import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getInfluencers } from "../../../api/requests/influencers";
import InfluencerProfile from "../../../components/ifluencerComponents/InfluencerProfile";
import Loading from "react-loading";
import { Error } from "../../../commons/Error";

const InfluencerProfilePage = () => {
  const [influencers, setInfluencers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { currentUser } = useSelector((state) => state.auth);
  
  useEffect(() => {
    setLoading(true);
    getInfluencers()
      .then((res) => {
        setInfluencers(res.influencers);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const influencerProfile = influencers?.find( 
    (id) => id.user === currentUser._id
  );

  return (
    <div>
      {!influencerProfile ? (
        <div style={{ marginTop: 100 }}> Create Profile </div>
      ) : (
        <InfluencerProfile influencerProfile={influencerProfile} />
      )}
    </div>
  );
};

export default InfluencerProfilePage;
