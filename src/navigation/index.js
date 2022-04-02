import { axios } from "../api/axios";
import { useSelector } from "react-redux";

import { Routes, Route } from "react-router-dom";

import NavBar from "../components/NavBar";
import HomePage from "../pages/main/HomePage";
import FavoritePage from "../pages/main/FavoritePage";
import InfluencerPage from "../pages/main/InfluencerPage";
import InfluencerDetailPage from "../pages/main/InfluencerDetailPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import InfluencerProfilePage from "../pages/influencer/InfluencerProfilePage";
import InfluencerOrders from "../pages/influencer/InfluencerOrders";
import InfluencerEditProfile from "../pages/influencer/InfluencerEditProfile";
import InfluencerCreateProfile from "../components/ifluencerComponents/InfluencerCreateProfile";
import InfluencerPayPage from "../pages/influencer/InfluencerPayPage";
import InfluencerSelectPayPage from "../pages/influencer/InfluencerSelectPayPage";
import InfluencerPayPalPage from "../pages/influencer/InfluencerPayPalPage";
import InfluencerFawryPage from "../pages/influencer/InfluencerFawryPage";
import UserProfilePage from "../pages/user/UserProfilePage";
import UserOrdersPage from "../pages/orders/UserOrdersPage";
import AdminPanelPage from "../pages/admin/AdminPanelPage";
import AdminInfinfluencerPage from "../pages/admin/AdminInfinfluencerPage";
import AdminReportInfluencerPage from "../pages/admin/AdminReportInfluencerPage";
import AdminEditInputUsersPage from "../pages/admin/AdminEditInputUsersPage";
import UserCreteReport from "../pages/user/UserCreateReport";

export default function Navigation() {
  const { currentUser } = useSelector((state) => state.auth);

  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${currentUser?.token}`;

  return (
    <>
      <NavBar />
      <Routes>
        {/* MAIN */}
        <Route path="/" element={<HomePage />} />
        <Route path="favorite" element={<FavoritePage />} />
        <Route path="influencer" element={<InfluencerPage />} />
        <Route path="influencer/:id" element={<InfluencerDetailPage />} />
        <Route path="loginPage" element={<LoginPage />} />

        {/* Influncer */}
        <Route path="loginPage/RegisterPage" element={<RegisterPage />} />
        <Route
          path="profile-influencer/:id"
          element={<InfluencerProfilePage />}
        />
        <Route path="orders" element={<InfluencerOrders />} />
        <Route path="/editprofile/:id" element={<InfluencerEditProfile />} />
        <Route path="/create-profile" element={<InfluencerCreateProfile />} />
        <Route path="/order/:influencer/:id" element={<InfluencerPayPage />} />
        <Route
          path="/user/selectPayment"
          element={<InfluencerSelectPayPage />}
        />
        {/* Admin */}
        <Route path="/placeOrder/PayPal" element={<InfluencerPayPalPage />} />
        <Route path="/placeOrder/Fawry" element={<InfluencerFawryPage />} />
        <Route path="/user-profile/:id" element={<UserProfilePage />} />
        <Route path="/user-orders" element={<UserOrdersPage />} />
        <Route path="/manage-admin-panel" element={<AdminPanelPage />} />
        <Route
          path="/admin-manage-influencer"
          element={<AdminInfinfluencerPage />}
        />
        {/* Users */}
        <Route path="/report-influencer/:id" element={<UserCreteReport />} />
        <Route
          path="/admin-manage-reports"
          element={<AdminReportInfluencerPage />}
        />
        <Route path="/admin/users/:id" element={<AdminEditInputUsersPage />} />
      </Routes>
    </>
  );
}
