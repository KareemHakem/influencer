import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { getInfluencer } from "../../../api/requests/influencers";
import { Loading } from "../../../commons/Loading";
import { Error } from "../../../commons/Error";
import InfluencerDetailCard from "../../../components/ifluencerComponents/InfluencerDetailCard";
import { addInfluencerFavorites } from "../../../redux/Influencer/action";
import AuthModal from "../../../commons/AuthModal";


export default function InfluencerDetail({ handleNavigate }) {
  const [influencer, setInfluencer] = useState({});
  const [otherInfluencer, setOtherInfluencer] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [select, setSelect] = useState("");
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [openModal, setOpenModal] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();
  const Navigate = useNavigate();

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
    Navigate("/favorite");
  };

  const handlePayNavigation = () => {
    if (isAuthenticated) {
      Navigate(`/order/${influencer.name}/${id}`);
      toast.warn("Payment must be completed in 5 minutes");
    } else {
      setOpenModal(true);
    }
  };

  const handleCloseModal = () => setOpenModal(!openModal);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div>
      <InfluencerDetailCard
        handleAddFavorite={handleAddFavorite}
        handlePayNavigation={handlePayNavigation}
        influencer={influencer}
        select={select}
        setSelect={setSelect}
      />
      <AuthModal handleCloseModal={handleCloseModal} openModal={openModal} />
    </div>
  );
}
