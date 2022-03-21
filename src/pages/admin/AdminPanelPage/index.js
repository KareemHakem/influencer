import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminPanelComponent from "../../../components/adminComponents/AdminPanelComponent";
import { deleteInfluencer } from "../../../redux/deletInfluencer/action";

import "./style.css";

export default function AdminPanelPage() {
  const { users } = useSelector((state) => state.users);

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAdminUserNavigate = () => {};
  const handleAdminOrderNavigate = () => {};

  const handleAdminDeleteUsers = (id) => {
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
