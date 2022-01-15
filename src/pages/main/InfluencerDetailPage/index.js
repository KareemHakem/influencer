import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInfluencer } from "../../../api/requests/influencers";
import { Loading } from "../../../commons/Loading";
import { Error } from "../../../commons/Error";

export default function InfluencerDetail() {
  const [influencer, setInfluencer] = useState({});
  const [otherInfluencer, setOtherInfluencer] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

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


  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div>
      <h1 style={{ marginTop: 150 }}> {id}</h1>
      <h1 style={{ marginTop: 150 }}> {influencer.name} </h1>
    </div>
  );
}
