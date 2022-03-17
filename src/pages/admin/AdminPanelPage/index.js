import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminPanelComponent from "../../../components/adminComponents/AdminPanelComponent";
import "./style.css";
import { getUsers } from "../../../redux/users/action";

export default function AdminPanelPage() {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleAdminUserNavigate = () => {};
  const handleAdminOrderNavigate = () => {};
  const handleDeleteUsersNavigate = () => {};
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
        handleDeleteUsersNavigate={handleDeleteUsersNavigate}
        handleEditInputUsersNavigate={handleEditInputUsersNavigate}
      />
    </div>
  );
}
