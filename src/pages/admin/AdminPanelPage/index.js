import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminPanelComponent from "../../../components/adminComponents/AdminPanelComponent";
import { deleteInfluencer } from "../../../redux/deletInfluencer/action";
import { getUsers } from "../../../redux/users/action";
import { Error } from "../../../commons/Error";
import { Loading } from "../../../commons/Loading";
import "./style.css";

export default function AdminPanelPage() {
  const { users, loading, error } = useSelector((state) => state.users);
  console.log(users, "users");

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleAdminUserNavigate = () => {};
  const handleAdminOrderNavigate = () => {};

  const handleAdminDeleteUsers = (id) => {
    console.log(id, 'sss')
    dispatch(deleteInfluencer(id));
  };

  const handleAdminInfluencersNavigate = () => {
    Navigate("/admin-manage-influencer");
  };
  const handleAdminReportNavigate = () => {
    Navigate("/admin-manage-reports");
  };
  const handleEditInputUsersNavigate = () => {
    Navigate("/admin/users/:id");
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
