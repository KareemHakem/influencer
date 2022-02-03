import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getInfluencer } from "../../../api/requests/influencers";
import { Loading } from "../../../commons/Loading";
import { Error } from "../../../commons/Error";
import InfluencerDetailCard from "../../../components/ifluencerComponents/InfluencerDetailCard";
import { addInfluencerFavorites } from "../../../redux/Influencer/action";

// import InfluencerCard from "../../../components/ifluencerComponents/InfluencerCard";

export default function InfluencerDetail({ handleNavigate }) {
  const [influencer, setInfluencer] = useState({});
  const [otherInfluencer, setOtherInfluencer] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [select, setSelect] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    getInfluencer(id)
      .then((res) => {
        setInfluencer(res.influencer);
        setOtherInfluencer(res.otherInfluencer);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [id]);

  const handleAddFavorite = () => {
    dispatch(addInfluencerFavorites(influencer));
  };

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div>
      <InfluencerDetailCard
        handleAddFavorite={handleAddFavorite}
        influencer={influencer}
        select={select}
        setSelect={setSelect}
      />
    </div>
  );
}
