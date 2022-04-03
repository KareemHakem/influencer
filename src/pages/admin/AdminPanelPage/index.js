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

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleAdminUserNavigate = () => {};
  const handleAdminOrderNavigate = () => {
    Navigate(`/admin-orders`);
  };
  const handleAdminDeleteUsers = (id) => dispatch(deleteUser(id));
  const handleEditInputUsersNavigate = (id) => Navigate(`/admin/users/${id}`);
  const handleAdminReportNavigate = () => Navigate("/admin-manage-reports");

  const handleAdminInfluencersNavigate = () =>
    Navigate("/admin-manage-influencer");

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
