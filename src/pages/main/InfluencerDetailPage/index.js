import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getInfluencer } from "../../../api/requests/influencers";
import { Loading } from "../../../commons/Loading";
import { Error } from "../../../commons/Error";
import InfluencerDetailCard from "../../../components/ifluencerComponents/InfluencerDetailCard";
import FavoritePage from "../FavoritePage";

// import InfluencerCard from "../../../components/ifluencerComponents/InfluencerCard";

export default function InfluencerDetail({ handleNavigate }) {
  const [influencer, setInfluencer] = useState({});
  const [otherInfluencer, setOtherInfluencer] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const Navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getInfluencer(id)
      .then((res) => {
        setInfluencer(res.influencer);
        setOtherInfluencer(res.otherInfluencer);
        console.log(res);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const handleAddFavorite = () => {
    Navigate("favorite");
    
  };

  return (
    <div>
      <InfluencerDetailCard
        handleAddFavorite={handleAddFavorite}
        influencer={influencer}
      />
    </div>
  );
}
