import React from "react";
import { useNavigate } from "react-router-dom";
import AdminPanelComponent from "../../../components/adminComponents/AdminPanelComponent";
import "./style.css";

export default function AdminPanelPage() {
  const Navigate = useNavigate();
  const handleAdminUserNavigate = () => {};
  const handleAdminOrderNavigate = () => {};
  const handleAdminInfluencersNavigate = () => {
    Navigate("/admin-manage-influencer");
  };
  const handleAdminReportNavigate = () => {
    Navigate("/admin-manage-reports");
  };
  return (
    <div>
      <AdminPanelComponent
        handleAdminUserNavigate={handleAdminUserNavigate}
        handleAdminOrderNavigate={handleAdminOrderNavigate}
        handleAdminInfluencersNavigate={handleAdminInfluencersNavigate}
        handleAdminReportNavigate={handleAdminReportNavigate}
      />
    </div>
  );
}
