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

  const Navigate = useNavigate();
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

  let pagesArray = [...Array(Number(influencer.pages))].map((_, i) => i + 1); // [1, 2,3,4]

  const navigateToPages = (pageNumber) => {
    pageNumber === 0
      ? Navigate(`/admin-manage-influencer`)
      : Navigate(`/admin-manage-influencer/${pageNumber}`);
  };

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div>
      <AdminInfluencerComponent
        influencer={influencer}
        handleDeleteInfluencer={handleDeleteInfluencer}
      />

      <div className="paginatePage">
        <div
          className="paginateNextAndPreviousPage"
          onClick={() => navigateToPages(Number(pageNumber) - 1)}
        >
          {<Icons.ArrowLeftIcon />}
        </div>
        {pagesArray.map((i) => (
          <div
            onClick={() => navigateToPages(i)}
            className="paginateNumberPage"
            key={i}
          >
            {i}
          </div>
        ))}
        <div
          className="paginateNextAndPreviousPage"
          onClick={() => navigateToPages(Number(pageNumber) + 1)}
        >
          {<Icons.ArrowRightIcon />}
        </div>
      </div>
    </div>
  );
}
