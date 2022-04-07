import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addInfluencerFavorites } from "../../../redux/Influencer/action";
import { toast } from "react-toastify";

import { getInfluencer } from "../../../api/requests/influencers";
import { Loading } from "../../../commons/Loading";
import { Error } from "../../../commons/Error";
import InfluencerCard from "../../../components/ifluencerComponents/InfluencerCard";
import InfluencerDetailCard from "../../../components/ifluencerComponents/InfluencerDetailCard";
import AuthModal from "../../../commons/AuthModal";

import "./style.css";

export default function InfluencerDetail() {
  const [influencer, setInfluencer] = useState({});
  const [otherInfluencer, setOtherInfluencer] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openImage, setOpenImage] = useState(false);
  const [select, setSelect] = useState("");
  const { isAuthenticated } = useSelector((state) => state.auth);

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getInfluencer(id)
      .then((res) => {
        setInfluencer(res.influencer);
        setOtherInfluencer(res.otherInfluencers);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [id]);

  const handleAddFavorite = () => {
    if (isAuthenticated) {
      dispatch(addInfluencerFavorites(influencer));
      navigate("/favorite");
    } else {
      setOpenModal(true);
    }
  };

  const handlePayNavigation = () => {
    if (isAuthenticated) {
      navigate(`/order/${influencer.name}/${id}`);
      toast.warn("Payment must be completed in 10 minutes");
    } else {
      setOpenModal(true);
    }
  };

  const handleAddReport = () => {
    if (isAuthenticated) {
      navigate(`/report-influencer/${id}`);
    } else {
      setOpenModal(true);
    }
  };

  const handToggleImage = () => setOpenImage(!openImage);
  const handToggleModal = () => setOpenModal(!openModal);

  const handleNavigate = (id) => {
    navigate(`/influencer/${id}`);
  };

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
        handleOpenImageFrame={handToggleImage}
        openImage={openImage}
        handleCloseImage={handToggleImage}
        handleAddReport={handleAddReport}
      />
      <div className="influencerDetailPage">
        {otherInfluencer.map((influencer) => (
          <InfluencerCard
            key={influencer._id}
            influencer={influencer}
            handleNavigate={handleNavigate}
          />
        ))}
      </div>

      <AuthModal handleCloseModal={handToggleModal} openModal={openModal} />
    </div>
  );
}
