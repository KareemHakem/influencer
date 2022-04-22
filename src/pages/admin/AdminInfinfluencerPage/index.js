import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteInfluencer } from "../../../redux/deleteInfluencer/action";
import AdminInfluencerComponent from "../../../components/adminComponents/AdminInfluencerComponent";
import { getInfluencers } from "../../../redux/influencers/action";
import { Loading } from "../../../commons/Loading";
import { Error } from "../../../commons/Error";
import { useNavigate, useParams } from "react-router-dom";
import { Icons } from "../../../assets/Icons";

export default function AdminInfinfluencerPage() {
  const { influencer, loading, error } = useSelector(
    (state) => state.influencers
  );

  const dispatch = useDispatch();
  const { pageNumber } = useParams();

  useEffect(() => {
    dispatch(getInfluencers(pageNumber));
  }, [dispatch, pageNumber]);

  const handleDeleteInfluencer = (id) => {
    dispatch(deleteInfluencer(id));
    console.log("id influencer =>", id);
    console.log("data influencer =>", deleteInfluencer());
  };

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div>
      <AdminInfluencerComponent
        influencer={influencer}
        handleDeleteInfluencer={handleDeleteInfluencer}
      />
    </div>
  );
}
