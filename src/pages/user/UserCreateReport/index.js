import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { userReportInfluencer } from "../../../redux/userCreateReport/action";

import UserCreateReportInput from "../../../components/userComponints/UserCreateReportInput";

export default function UserCreteReport() {
  const { loading } = useSelector((state) => state.createReport);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const handleUserReportInfluencer = (values) => {
    dispatch(userReportInfluencer({ ...values, influencer: id }));
    console.log(values);
    navigate(`/influencer/${id}`);
  };

  return (
    <div>
      <UserCreateReportInput
        handleUserReportInfluencer={handleUserReportInfluencer}
        loading={loading}
      />
    </div>
  );
}
