import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getInfluencers } from "../../../api/requests/influencers";
import { Error } from "../../../commons/Error";
import { Loading } from "../../../commons/Loading";

export default function InfluencerPage() {
  // finally for not repeating the functions/methods in the THEN & CATCH
  const [loading, setLoading] = useState(false);
  const [influencer, setInfluencer] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    getInfluencers()
      .then((res) => setInfluencer(res.influencers))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const handleNavigate = (id) => {
    navigate(`/influencer/${id}`);
  };

  return (
    <div>
      {influencer.map((influencer) => (
        <div
          key={influencer._id}
          style={{ marginTop: 100, backgroundColor: "#439234" }}
          onClick={()=> handleNavigate(influencer._id)}
        >
          {influencer.name}
        </div>
      ))}
    </div>
  );
}
