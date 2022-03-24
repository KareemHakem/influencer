import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../../../redux/deleteUsers/action";

import AdminPanelComponent from "../../../components/adminComponents/AdminPanelComponent";

import { getUsers } from "../../../redux/users/action";
import { Error } from "../../../commons/Error";
import { Loading } from "../../../commons/Loading";
import "./style.css";

export default function AdminPanelPage() {
  const { users, loading, error } = useSelector((state) => state.users);
  const { influencer } = useSelector((state) => state.influencers);
  console.log("influencer =>>>>>>", influencer);
  console.log(
    "users =>>>>",
    users.map((user) => <div>{user._id}</div>)
  );

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  //   const usersDetail = users.users.find((i) => i._id === id);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleAdminUserNavigate = () => {};
  const handleAdminOrderNavigate = () => {};

  const handleAdminDeleteUsers = (id) => {
    dispatch(deleteUser(id));
  };

  const handleAdminInfluencersNavigate = () => {
    Navigate("/admin-manage-influencer");
  };
  const handleAdminReportNavigate = () => {
    Navigate("/admin-manage-reports");
  };
  const handleEditInputUsersNavigate = (id) => {
    Navigate(`/admin/users/${id}`);
  };

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div>
      <AdminPanelComponent
        users={users}
        handleAdminUserNavigate={handleAdminUserNavigate}
        handleAdminOrderNavigate={handleAdminOrderNavigate}
        handleAdminInfluencersNavigate={handleAdminInfluencersNavigate}
        handleAdminReportNavigate={handleAdminReportNavigate}
        handleEditInputUsersNavigate={handleEditInputUsersNavigate}
        handleAdminDeleteUsers={handleAdminDeleteUsers}
      />
    </div>
  );
}
